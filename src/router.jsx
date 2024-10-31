import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component

const AddProduct = lazy(() => import("./AddProduct"));
const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const DefaultLayout = lazy(() => import("./DefaultLayout"));
const Login = lazy(() => import("./Login"));
const ProductDetails = lazy(() => import("./ProductDetails"));
const Registration = lazy(() => import("./Registration"));

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
        path: "/Login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute element={<Home />} />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute element={<Home />} />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute element={<ProductDetails />} />
          </Suspense>
        ),
      },
      {
        path: "/AddProduct",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute element={<AddProduct />} />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute element={<Cart />} />
          </Suspense>
        ),
      },
      {
        path: "/Registration",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Registration />
          </Suspense>
        ),
      },
    ],
  },
]);

export { Router };
