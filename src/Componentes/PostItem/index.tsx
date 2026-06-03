import "./postItem.css";
import type { Post } from "../../Types/post";

type Props = {
    post: Post;
    onClick: () => void;
};

export default function PostItem({ post, onClick }: Props) {
    return (
        <div className="post-item" onClick={onClick}>
            <img src={post.image} alt="post" />
        </div>
    );
}