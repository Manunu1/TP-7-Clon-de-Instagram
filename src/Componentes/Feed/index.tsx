import "./Feed.css";
import Post from "../Post";
import type { Post as PostType } from "../../Types/post";

type FeedProps = { /* esto define de que tipo son las cosas que va a recibir la funcion del feed */
  posts: PostType[];
  setSelectedPost: (post: PostType) => void;
};

export default function Feed({ posts, setSelectedPost }: FeedProps) {
  return (
    <main className="feed">
      {posts.map((post) => ( /* mapea cada posteo del array en un post */
        <Post
          key={post.id}
          post={post}
          onClick={() => setSelectedPost(post)}
        />
      ))}
    </main>
  );
}