// Registration.js
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    axios
      .post("https://e-commerce-be-five.vercel.app/register", {
        email,
        password,
      }) // Update the URL as necessary
      .then((response) => {
        console.log(response.data.message); // Success message from the server
        alert("Registration successful!"); // Alert the user
        navigate("/login"); // Redirect to login after successful registration
      })
      .catch((error) => {
        console.error(error.response.data.message); // Show error message
        alert(error.response.data.message); // Alert the user
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Register</h2>
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
              Register
            </Button>
          </Form>
          <div className="text-center mt-3">
            <span>Already a user? </span>
            <Button
              variant="link"
              onClick={() => navigate("/login")} // Redirect to login
            >
              Login here
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
