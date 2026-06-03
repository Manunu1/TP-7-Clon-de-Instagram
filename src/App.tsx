import { useEffect, useState } from "react";
import Feed from "./Componentes/Feed";
import type { Post } from "./Types/post";
import { getPosts } from "./Services/api";
import "./App.css";
import PostModal from "./Componentes/PostModal";
import Sidebar from "./Componentes/Sidebar";

function App() {
  const [posts, setPosts] = useState<Post[]>([]); //useState donde se guardan todos los posteos que van a aparecer.
  const [selectedPost, setSelectedPost] = useState<Post | null>(null); //use state que guarda el post seleccionado para el modal
  const [loading, setLoading] = useState<boolean>(true); //el useState que maneja si se muestra o no el spinner de carga

  //el useEffect se encarga de cargar los posts solo una vez, cuando se renderiza la pagina por primera vez.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try { //este try catch finally lo añadi yo
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

      <Sidebar />

      {loading ? ( //si loading es true, se muestra el coso de carga, sino se muestra el feed
        <div className="spinner"></div>
      ) : (
        <Feed posts={posts} setSelectedPost={setSelectedPost} />
      )}

      {selectedPost && ( //si hay un post seleccionado (osea si no es null, undefined o cualquier cosa asi), se muestra el modal
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

    </div>
  );
}

export default App;