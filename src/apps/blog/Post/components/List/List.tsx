import { IPost } from "~/apps/blog/Post/types";
import PostListItem from "./ListItem";


export type PostListProps = { isLoading?: boolean; posts: IPost[] };
const PostList = ({ posts = [] }: PostListProps) => {
  return (
    <>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
