import { Badge, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css"; // Import the CSS file
import noImage from "./assest/noImage.png";
import logo from "./assest/logo.PNG";
import { login, logout } from "./Reducers/LoginReducer";
import { useEffect, useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalQuantity = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  useEffect(() => {
    const session = sessionStorage.getItem("isLoggedIn");
    if (session === "true") {
      dispatch(login());
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("isLoggedIn");
  };

  // Return null if the user is not logged in, effectively hiding the header
  if (!isLoggedIn) {
    return null;
  }

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled-navbar" : ""}`}
    >
      {/* Left-aligned logo and brand */}
      <div className="d-flex align-items-center">
        <img src={logo} width={70} alt="Logo" />
        <Navbar.Brand className="brand ms-2">VerVain</Navbar.Brand>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center gap-3">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/Cart" className="nav-link">
            Cart <Badge bg="secondary">{totalQuantity}</Badge>
          </NavLink>
          <NavLink to="/AddProduct" className="nav-link">
            Add Product
          </NavLink>

          <Dropdown as={ButtonGroup}>
            <Button variant="light" className="profile-button">
              <img
                className="rounded-circle dropdown-img"
                src={noImage}
                width={30}
                alt="No Image"
              />
            </Button>
            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
