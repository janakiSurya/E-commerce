import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "./Reducers/LoginReducer";

const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [loading, setLoading] = useState(true); // Loading state

  // Check the login state in session storage on mount
  useEffect(() => {
    const session = sessionStorage.getItem("isLoggedIn");
    if (session === "true") {
      dispatch(login());
    }
    setLoading(false); // Set loading to false after the check
  }, [dispatch]);

  if (loading) return <div>Loading...</div>; // Optional loading indicator

  return isLoggedIn ? element : <Navigate to="/Login" />;
};

export default ProtectedRoute;
