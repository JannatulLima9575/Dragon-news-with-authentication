import {
    createBrowserRouter,
  } from "react-router";

import Layouts from './../Layouts/Layouts';
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
      path: "/",
      Component: Layouts,
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
          path: "/category/:id",
          Component: CategoryNews,
        },
        // {
        //   path: "/",
        //   Component: Home
        // },
      ]
    },
    {
      path: "/auth",
      element: <h1>Authentication layouts</h1>,
    },
    {
      path: "/news",
      element: <h1>News layouts</h1>,
    },
    {
      path: "/*",
      element: <h1>Error 404</h1>,
    },
]);
export default router;