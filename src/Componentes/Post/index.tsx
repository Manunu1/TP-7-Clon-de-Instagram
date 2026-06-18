import { useState } from "react";
import "./Post.css";
import type { Post } from "../../Types/post";
// 1. Importamos el icono Heart de la librería
import { Heart } from "lucide-react";

interface PostProps { /* esto define de que tipo son las cosas que va a recibir la funcion del post */
  post: Post;
  onClick: () => void;
}

export default function Post({ post, onClick }: PostProps) {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <article className="post"> {/* el contenedor de quien posteo el contenido */}
      <div className="post-header">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="avatar"
        />
        <span className="username">{post.user}</span>
      </div>

      <div className="post-image-container"> {/* el contenedor de la imagen del posteo*/}
        <img
          src={post.image}
          alt="post"
          className="post-image"
          onClick={onClick} /* viene de la feed, seria setSelectedPost(post) */
        />
      </div>

      <div className="post-actions">
        <button onClick={handleLike} className="like-btn">
          {/* 2. Usamos el componente Heart y le cambiamos las propiedades según el estado */}
          <Heart
            size={24}
            fill={liked ? "#ed4956" : "none"}
            color={liked ? "#ed4956" : "#262626"}
          />
        </button>
      </div>

      <div className="post-info">
        <p className="likes">
          {post.likes + (liked ? 1 : 0)} likes
        </p>

        <p className="caption">
          <strong>{post.user}</strong> {post.caption}
        </p>
      </div>
    </article>
  );
}