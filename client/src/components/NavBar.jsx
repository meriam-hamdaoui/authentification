import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

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
            <Nav.Link as={Link} to="/signin">
              Signin
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign up
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
