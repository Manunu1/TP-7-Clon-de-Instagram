import "./postGrid.css";
import PostItem from "../PostItem";
import type { Post } from "../../Types/post";

type Props = {
  posts: Post[];
  setSelectedPost: (post: Post) => void;
};

export default function PostGrid({ posts, setSelectedPost }: Props) {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onClick={() => setSelectedPost(post)}
        />
      ))}
    </div>
  );
}