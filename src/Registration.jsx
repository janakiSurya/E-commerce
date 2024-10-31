import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assest/logo.png"; // Import your logo
import "./Registration.css"; // Import the CSS file for styles

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
      .post(process.env.REACT_APP_REGISTER_URL, {
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
    <Container fluid className="registration-container">
      <Row className="vh-100">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <img src={logo} alt="Company Logo" className="logo" />
          <h2 className="mt-3">Welcome to VerVain</h2>
          <p className="fade-in">
            "Unlock Your Shopping Spree: VerVain Has It All!"
          </p>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="registration-form">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
