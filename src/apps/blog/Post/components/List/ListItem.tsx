import { Card, CardHeader, Typography } from "@mui/material";
import { IPost } from "~/apps/blog/Post/types";
import Link from "~/components/Link";
import formatDate from "~/lib/formatDate";
import { getDetailsUrl } from "../../urls/ui";


export type PostListItemProps = {
  post: IPost;
};

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  return (
    <Card sx={{ minWidth: "100%", marginBottom: (theme) => theme.spacing(2) }}>
      <CardHeader
        title={
          <Link to={getDetailsUrl(post.id)}>
            <Typography variant="h4">{post.title}</Typography>
          </Link>
        }
        subheader={`published: ${formatDate(post.published)}`}
      />
    </Card>
  );
};

export default PostListItem;
