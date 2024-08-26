import { Badge, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css"; // Import the new CSS file
import noImage from "./assest/noImage.png";
import logo from "./assest/logo.png";
import { login, logout } from "./Reducers/LoginReducer";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const session = sessionStorage.getItem("isLoggedIn");
    if (session === "true") {
      dispatch(login());
    }
  }, []);

  const { cart } = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const totalQuantity = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  //Our Header Component
  return (
    <Navbar sticky="top" expand="lg" className="custom-navbar">
      <Container>
        <img src={logo} width={70}></img>
        <Navbar.Brand href="/home" className="brand">
          E-Commerce Demo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Cart <Badge bg="secondary">{totalQuantity}</Badge>
            </NavLink>
            <NavLink
              to="/AddProduct"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Add Product
            </NavLink>
            {!isLoggedIn ? (
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                Login
              </NavLink>
            ) : (
              <Dropdown as={ButtonGroup}>
                <Button variant="light">
                  <img
                    className="rounded-circle "
                    src={noImage}
                    width={30}
                    alt="No Image"
                  />
                </Button>

                <Dropdown.Toggle
                  split
                  variant="light"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout} href="#/action-1">
                    Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
