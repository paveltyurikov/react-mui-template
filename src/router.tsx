import { createBrowserRouter } from "react-router-dom";
import { BLOG_ROUTES } from "./apps/blog/routes";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";


const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      ...BLOG_ROUTES,
    ],
  },
]);

export default defaultRouter;
