import { Outlet } from "react-router-dom";
import Header from "./Header";

const DefaultLayout = () => {
  return (
    <div className="App container">
      <Header />
      <Outlet />
    </div>
  );
};
export default DefaultLayout;
