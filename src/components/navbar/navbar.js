import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SignOutButton from '../SignOutButton/SignOutButton';
import { useAuth } from "../../config/Auth";

function NavbarComponent() {
  const auth = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        {auth.user ? (
        <>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/addphoto">Add Photo</Nav.Link>
        </>)
        :
        (null)}
        {!auth.user ? (
        <>
        <Nav.Link href="/signin">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        </>)
        :
        (null)}

      </Nav>
      {auth.user ? (<SignOutButton />) : (null)}
    </Navbar>
  );
}

export default NavbarComponent;
