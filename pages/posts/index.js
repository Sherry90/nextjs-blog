import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
        slug: "getting-started-with-nextjs",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS Fullstack course",
        date: "2023-09-24",
    },
    {
        slug: "getting-started-with-nextjs2",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS Fullstack course",
        date: "2023-09-24",
    },
    {
        slug: "getting-started-with-nextjs3",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS Fullstack course",
        date: "2023-09-24",
    },
    {
        slug: "getting-started-with-nextjs4",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS Fullstack course",
        date: "2023-09-24",
    },
];

const AllPostPage = () => {
    return <AllPosts posts={DUMMY_POSTS} />
};

export default AllPostPage;
