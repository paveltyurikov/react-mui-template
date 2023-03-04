import { Grid } from "@mui/material";
import ButtonCreatePost from "~/apps/blog/Post/components/ActionButtons/BtnCreate";
import usePostCreate from "~/apps/blog/Post/hooks/useCreate";
import { IPost } from "~/apps/blog/Post/types";
import PostListItem from "./ListItem";


const PostList: React.FC<{ posts: IPost[] }> = ({ posts = [] }) => {
  const {} = usePostCreate();
  return (
    <Grid container spacing={2} sx={{ margin: (theme) => theme.spacing(2, 0) }}>
      <Grid item container>
        <ButtonCreatePost>Add post</ButtonCreatePost>
      </Grid>
      {posts.map((post) => (
        <Grid key={post.id} item container>
          <PostListItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
