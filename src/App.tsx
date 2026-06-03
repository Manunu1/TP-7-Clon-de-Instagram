import { useEffect, useState } from "react";
import Feed from "./Componentes/Feed";
import type { Post } from "./Types/post";
import { getPosts } from "./Services/api";
import "./App.css";
import PostModal from "./Componentes/PostModal";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try { //esto lo añadi yo
      const data = await getPosts();
      setPosts(data);
      }
      catch (error) {
        console.error("Error fetching posts:", error);
      }
      finally {
      setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <Feed posts={posts} setSelectedPost={setSelectedPost} />
      )}

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

    </div>
  );
}

export default App;