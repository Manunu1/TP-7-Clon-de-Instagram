import { useEffect, useState } from "react";
import Feed from "./Componentes/Feed";
import type { Post } from "./Types/post";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
      const data = await res.json();

      const formattedPosts: Post[] = data.message.map((img: string, i: number) => ({
        id: i,
        image: img,
        likes: Math.floor(Math.random() * 500),
        caption: "Un perrito 🐶",
        user: "manuel_dev",
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Feed posts={posts} setSelectedPost={setSelectedPost} />
    </div>
  );
}

export default App;