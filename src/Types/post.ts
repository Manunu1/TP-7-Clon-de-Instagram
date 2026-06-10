import type { Comment } from "./comment";

export type Post = {
  id: number;
  image: string;
  likes: number;
  caption: string;
  user: string;
  date: string;
  comments: Comment[];
};