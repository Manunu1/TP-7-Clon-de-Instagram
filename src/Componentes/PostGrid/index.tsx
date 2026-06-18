import "./postGrid.css";
import PostItem from "../PostItem";
import type { Post } from "../../Types/post";

type Props = { /* esto define de que tipo son las cosas que va a recibir la funcion del post grid */
  posts: Post[];
  setSelectedPost: (post: Post) => void;
};

export default function PostGrid({ posts, setSelectedPost }: Props) { /* recibe los datos hardcodeados de los posts y el handler del selected post */
  return (
    <div className="post-grid">
      {posts.map((post) => ( /* mapea cada posteo del array en un post item */
        <PostItem
          key={post.id}
          post={post}
          onClick={() => setSelectedPost(post)}
        />
      ))}
    </div>
  );
}