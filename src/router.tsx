import { createBrowserRouter } from "react-router-dom";
import { BLOG_ROUTES } from "./apps/blog/routes";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Page404 from "./components/Page404/Page404";


const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      ...BLOG_ROUTES,
      { path: "*", element: <Page404 /> },
    ],
  },
]);

export default defaultRouter;
