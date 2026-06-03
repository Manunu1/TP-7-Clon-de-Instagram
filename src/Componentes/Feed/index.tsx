import "./Feed.css";
import Post from "../Post";
import type { Post as PostType } from "../../Types/post";

type FeedProps = {
  posts: PostType[];
  setSelectedPost: (post: PostType) => void;
};

export default function Feed({ posts, setSelectedPost }: FeedProps) {
  return (
    <main className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onClick={() => setSelectedPost(post)}
        />
      ))}
    </main>
  );
}