import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => fs.readdirSync(postDirectory);

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
};
export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  return postFiles
    .map((postFiles) => getPostData(postFiles))
    .sort((postA, postB) => postA.date - postB.date);
};

export const getFeaturedPosts = () => {
  return getAllPosts().filter((post) => post.isFeatured);
};
