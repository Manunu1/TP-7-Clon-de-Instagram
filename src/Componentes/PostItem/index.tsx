import "./postItem.css";
import type { Post } from "../../Types/post";

type Props = { /* esto define de que tipo son las cosas que va a recibir la funcion del post item */
  post: Post;
  onClick: () => void;
};

export default function PostItem({ post, onClick }: Props) { /* esto es para profile, nomas muestra la imagen del posteo y tiene una funcion de onclick que trae de postGrid que seria setSelectedPost(post) */
    return (
        <div className="post-item" onClick={onClick}>
            <img src={post.image} alt="post" />
        </div>
    );
}