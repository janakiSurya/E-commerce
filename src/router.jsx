import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AddProduct = lazy(() => import("./AddProduct"));
const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const DefaultLayout = lazy(() => import("./DefaultLayout"));
const Login = lazy(() => import("./Login"));

// import Cart from "./Cart";
// import DefaultLayout from "./DefaultLayout";
// import Login from "./Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/AddProduct",
        element: <AddProduct />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },

      {
        path: "/",
        element: <Home />, // Assuming Home is your default route
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

export { Router };
