import { useState } from "react";
import "./Post.css";
import type { Post } from "../../Types/post";
// 1. Importamos el icono Heart de la librería
import { Heart } from "lucide-react";

interface PostProps {
  post: Post;
  onClick: () => void;
}

export default function Post({ post, onClick }: PostProps) {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <article className="post">
      <div className="post-header">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="avatar"
        />
        <span className="username">{post.user}</span>
      </div>

      <div className="post-image-container">
        <img
          src={post.image}
          alt="post"
          className="post-image"
          onClick={onClick}
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