import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { postUser } from "../api/user";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (value) => {
    await postUser(value);
    setName("");
    setEmail("");
    setPassword("");
    navigate("/signin");
  };

  return (
    <div className="Signin">
      <div className="title">
        <h1>Signup</h1>
      </div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3">
          <Form.Label>full name </Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="txt"
            placeholder="John Doe"
            autoComplete="false"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="john@example.com"
            autoComplete="false"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="false"
          />
        </Form.Group>

        <Button
          onClick={() => {
            handleRegister({ name, email, password });
          }}
          variant="primary"
          type="submit"
        >
          register
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
