import HomeIcon from "@mui/icons-material/Home";
import { createBrowserRouter } from "react-router-dom";
import {
  POST_ROUTE,
  POST_NAV_ITEM,
  POST_DETAILS_ROUTE,
} from "./apps/blog/Post/config";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";


export const defaultNavigation = [
  { title: "home", path: "/", Icon: HomeIcon },
  POST_NAV_ITEM,
];
const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      POST_ROUTE,
      POST_DETAILS_ROUTE,
    ],
  },
]);

export default defaultRouter;
