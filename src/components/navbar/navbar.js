import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import SignOutButton from "../SignOutButton/SignOutButton";
import { useAuth } from "../../config/Auth";

function NavbarComponent() {
  const auth = useAuth(),
    [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>Logo</MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/" link>
              Home
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/contact" link>
              Contact
            </MDBNavLink>
          </MDBNavItem>
          {auth.user ? (
            <>
              <MDBNavItem>
                <MDBNavLink to="dashboard" link>
                  Dashboard
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/addmedia" link>
                  Add Media
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/slideshow" link>
                  Slideshow
                </MDBNavLink>
              </MDBNavItem>
            </>
          ) : (
            <>
              <MDBNavItem>
                <MDBNavLink to="/signin" link>
                  Sign In
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/signup" link>
                  Sign Up
                </MDBNavLink>
              </MDBNavItem>
            </>
          )}
        </MDBNavbarNav>
        {auth.user ? (
          <MDBNavbarNav right>
            <MDBNavItem>
              <SignOutButton />
            </MDBNavItem>
          </MDBNavbarNav>
        ) : null}
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default NavbarComponent;
