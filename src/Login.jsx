import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "./Reducers/LoginReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
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
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
