import React from "react";
import { Form, Button } from "react-bootstrap";

const Signup = () => {
  return (
    <div className="Signin">
      <div className="title">
        <h1>Signup</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          register
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
