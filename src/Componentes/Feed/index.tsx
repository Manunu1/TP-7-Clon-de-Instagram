import "./Feed.css";
import Post from "../Post/index.js";

type PostType = {
  id: number;
  image: string;
  likes: number;
  caption: string;
  user: string;
};

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