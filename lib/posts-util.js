import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

const getPostData = (fileName) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  return {
    slug: postSlug,
    ...data,
    content,
  };
};
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirectory);
  
  return postFiles.map(postFiles => getPostData(postFiles))
    .sort((postA, postB) => postA.date - postB.date);
};

export const getFeaturedPosts = () => {
  return getAllPosts().filter(post => post.isFeatured);
}
