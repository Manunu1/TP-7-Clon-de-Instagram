import "./PostModal.css";
import type { Post } from "../../Types/post";
// 1. Importamos el icono X de la librería
import { X } from "lucide-react";

type PostModalProps = {
    post: Post;
    onClose: () => void;
};

export default function PostModal({ post, onClose }: PostModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                {/* 2. Reemplazamos el emoji por el componente <X /> */}
                <button className="close-btn" onClick={onClose}>
                    <X size={18} color="#262626" />
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