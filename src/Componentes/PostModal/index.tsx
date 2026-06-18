import "./PostModal.css";
import type { Post } from "../../Types/post";
import { X } from "lucide-react";

type PostModalProps = { /* esto define de que tipo son las cosas que va a recibir la funcion del post modal */
  post: Post;
  onClose: () => void;
};

export default function PostModal({ post, onClose }: PostModalProps) /*el onclose es una funcion que se llama cuando se cierra el modal, que seria setSelectedPost(null) */{
  return (
    <div className="modal-overlay" onClick={onClose}> {/* este div es todo lo de afuera del modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* este div es el modal, el stopPropagation evita que se cierre al hacer click, porque no sube al padre */}

        <button className="close-btn" onClick={onClose}> {/* este boton es el de cerrar tipo la X */}
          <X size={18} color="#262626" />
        </button>

        <img src={post.image} alt="post" className="modal-image" />

        <div className="modal-info">

          <h3>{post.user}</h3>

          <div className="comments">
            {post.comments.map((c) => ( /* esto muestra los comentarios del post, los mapea en un p */
              <p key={c.id}>
                <strong>{c.user}:</strong> {c.text}
              </p>
            ))}
          </div>

          <span className="date">{post.date}</span>

        </div>
      </div>
    </div>
  );
}