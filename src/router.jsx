import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const AddProduct = lazy(() => import("./AddProduct"));
const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const DefaultLayout = lazy(() => import("./DefaultLayout"));
const Login = lazy(() => import("./Login"));
const ProductDetails = lazy(() => import("./ProductDetails")); // Lazy load ProductDetails

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
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/product/:id", // Product details page route
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetails />
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
            <Cart />
          </Suspense>
        ),
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
