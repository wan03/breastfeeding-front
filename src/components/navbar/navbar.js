import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#breathing">Breathing</Nav.Link>
      <Nav.Link href="#pumping">Pumping</Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default NavbarComponent;