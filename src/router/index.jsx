import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layout/LayoutPublic";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog, { loaderBlog } from "../pages/Blog";
import Post, { loaderPost } from "../pages/Post";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic></LayoutPublic>,
    errorElement: <NotFound></NotFound>,

    children: [
      {
        errorElement: <NotFound></NotFound>,
        children: [
          {
            index: true,
            element: <Home></Home>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
          {
            path: "/blog",
            element: <Blog></Blog>,
            loader: loaderBlog,
          },
          {
            path: "/blog/:id",
            element: <Post></Post>,
            loader: loaderPost,
          },
        ],
      },
    ],
  },
]);
