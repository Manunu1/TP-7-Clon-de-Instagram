import type { Post } from "../Types/post";

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await res.json();

  const formattedPosts: Post[] = data.message.map((img: string, i: number) => ({
    id: i,
    image: img,
    likes: Math.floor(Math.random() * 500),
    caption: "Un perrito 🐶",
    user: "manuel_dev",
  }));

  return formattedPosts;
};