import "./PostModal.css";
import type { Post } from "../../Types/post";
import { X } from "lucide-react";

type PostModalProps = {
  post: Post;
  onClose: () => void;
};

export default function PostModal({ post, onClose }: PostModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>
          <X size={18} color="#262626" />
        </button>

        <img src={post.image} alt="post" className="modal-image" />

        <div className="modal-info">

          <h3>{post.user}</h3>

          {/* 🔥 SOLO AGREGO ESTO */}
          <div className="comments">
            {post.comments.map((c) => (
              <p key={c.id}>
                <strong>{c.user}:</strong> {c.text}
              </p>
            ))}
          </div>

          {/* 🔥 SOLO AGREGO ESTO */}
          <span className="date">{post.date}</span>

        </div>
      </div>
    </div>
  );
}