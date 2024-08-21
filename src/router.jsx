import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
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
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <DefaultLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />{" "}
          </Suspense>
        ),
      },
      {
        path: "/AddProduct",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AddProduct />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            <Cart />
          </Suspense>
        ),
      },

      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ), // Assuming Home is your default route
      },
      {
        path: "/Login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
]);

export { Router };
