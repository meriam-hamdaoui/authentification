import React from "react";
import { Form, Button } from "react-bootstrap";

const Signin = () => {
  return (
    <div className="Signin">
      <div className="title">
        <h1>Sign in</h1>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="false"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="false"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          login
        </Button>
      </Form>
    </div>
  );
};

export default Signin;
