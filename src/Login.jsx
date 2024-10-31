import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "./Reducers/LoginReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assest/logo.PNG"; // Import your logo
import "./Login.css"; // Import custom CSS for additional styles

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    axios
      .post("https://e-commerce-be-five.vercel.app/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.message); // Success message from the server
        dispatch(login()); // Update Redux state to logged in
        sessionStorage.setItem("isLoggedIn", "true"); // Set session storage
        navigate("/home"); // Redirect to home after successful login
      })
      .catch((error) => {
        console.error(
          error.response ? error.response.data.message : error.message
        ); // Show error message
        alert(
          error.response
            ? error.response.data.message
            : "Login failed. Please try again."
        ); // Alert the user
      });
  };

  return (
    <Container fluid className="login-container">
      <Row className="h-100 justify-content-center align-items-center">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center text-center"
        >
          <img src={logo} alt="Company Logo" className="logo" />
          <h2 className="mt-3">Welcome to VerVain</h2>
          <p>"Unlock Your Shopping Spree: VerVain Has It All!"</p>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="login-form">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
            <div className="text-center mt-3">
              <span>Not a user? </span>
              <Button
                variant="link"
                onClick={() => navigate("/Registration")} // Assuming /register is the route for registration
              >
                Register here
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
