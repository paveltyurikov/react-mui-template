import { Box, Typography } from "@mui/material";
import { IPost } from "~/apps/blog/Post/types";
import Link from "~/components/Link";
import formatDate from "~/lib/formatDate";
import { getDetailsUrl } from "../../urls/ui";


const PostListItem: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Box sx={{ minWidth: "100%", marginBottom: (theme) => theme.spacing(2) }}>
      <Link to={getDetailsUrl(post.id)}>
        <Typography variant="h4">{post.title}</Typography>
      </Link>
      <Typography variant="caption">{formatDate(post.published)}</Typography>
    </Box>
  );
};

export default PostListItem;
