import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="signIn">
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }}>
            Authentification
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse
            style={{
              marginLeft: "40rem",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "flex-end",
            }}
          >
            <Navbar as={Link} to="/signin">
              Signin
            </Navbar>
            <Navbar as={Link} to="/signup">
              Sign up
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
