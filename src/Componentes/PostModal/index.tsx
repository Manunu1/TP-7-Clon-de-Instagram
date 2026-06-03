import "./PostModal.css";
import type { Post } from "../../Types/post";

type PostModalProps = {
  post: Post;
  onClose: () => void;
};

export default function PostModal({ post, onClose }: PostModalProps) { //el postmodalprops dice que este componente recibe props que cumplen con el type de arriba
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>
          ❌
        </button>

        <img src={post.image} alt="post" className="modal-image" />

        <div className="modal-info">
          <h3>{post.user}</h3>
          <p>{post.caption}</p>
          <p>{post.likes} likes</p>
        </div>

      </div>
    </div>
  );
}