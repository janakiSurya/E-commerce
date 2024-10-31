import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./DefaultLayout.css"; // Import the CSS file

const DefaultLayout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
