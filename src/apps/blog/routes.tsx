import PostDetailsContainer from "~/apps/blog/Post/components/Details/DetailsContainer";
import { POST_PATH } from "~/apps/blog/Post/urls/ui";
import PostListContainer from "./Post/components/List/ListContainer";
import PostAdminTable from "./Post/components/Table/Table";


export const BLOG_ROUTES = [
  {
    path: `${POST_PATH}/admin`,
    element: <PostAdminTable />,
  },
  {
    path: `${POST_PATH}`,
    element: <PostListContainer />,
  },
  {
    path: `${POST_PATH}/:id`,
    element: <PostDetailsContainer />,
  },
];
