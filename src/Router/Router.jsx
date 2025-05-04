import {
    createBrowserRouter,
  } from "react-router";

import Layouts from './../Layouts/Layouts';
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLAyout from "../Layouts/AuthLAyout";

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
          loader: () => fetch("/news.json")
        },
        // {
        //   path: "/",
        //   Component: Home
        // },
      ]
    },
    {
      path: "/auth",
      Component: AuthLAyout,
      children: [
        {
          path: "/auth/login",
          Component: Login,
        },
        {
          path: "/auth/register",
          Component: Register,
        }
      ]
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