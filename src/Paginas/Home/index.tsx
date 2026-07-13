import { useEffect, useState } from "react";
import Feed from "../../Componentes/Feed";
import type { Post } from "../../Types/post";
import { getPosts } from "../../Services/api";
import PostModal from "../../Componentes/PostModal";
import "./home.css"
import StoriesBar from "../../Componentes/StoriesBar";
import CrearPost from "../../Componentes/CrearPost";

export default function Home() {

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
    <div className="home-container">

      <StoriesBar />

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

      <CrearPost
        onPostCreated={(newPost: any) => {
          setPosts((prev) => [
            {
              id: newPost.id,
              image: newPost.url_imagen,
              likes: newPost.likes,
              caption: newPost.descripcion,
              user: newPost.nombre_usuario || "yo",
              date: new Date(newPost.fecha_creacion).toLocaleDateString(),
              comments: []
            },
            ...prev
          ]);
        }}
      />

    </div>
  );
}