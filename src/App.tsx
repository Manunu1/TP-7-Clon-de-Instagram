import { useEffect, useState } from "react";
import Feed from "./Componentes/Feed";
import type { Post } from "./Types/post";
import { getPosts } from "./Services/api";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Feed posts={posts} setSelectedPost={setSelectedPost} />
    </div>
  );
}

export default App;