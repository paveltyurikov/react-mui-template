import { Box, Typography } from "@mui/material";
import { IPost } from "~/apps/blog/Post/types";
import formatDate from "~/lib/formatDate";


const Details: React.FC<{ post?: IPost; isLoading: boolean }> = ({
  post,
  isLoading,
}) => {
  return post ? (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3">{post.title}</Typography>
      <Typography
        component="div"
        variant="caption"
        sx={{ margin: (theme) => theme.spacing(1, 0, 2, 0) }}
      >
        {formatDate(post.published)}
      </Typography>
      <Typography
        component="div"
        sx={{ margin: (theme) => theme.spacing(4, 0) }}
      >
        {post.content}
      </Typography>
    </Box>
  ) : null;
};

export default Details;
