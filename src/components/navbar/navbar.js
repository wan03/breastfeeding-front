import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/addphoto">Add Photo</Nav.Link>
        <Nav.Link href="/signin">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
