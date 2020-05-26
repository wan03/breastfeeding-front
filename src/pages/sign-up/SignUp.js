import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBInputGroup, MDBBtn } from "mdbreact";
import { useAuth } from "../../config/Auth";

const Signup = ({ history }) => {
  /**
   * Get the Auth instance from context
   */

  const auth = useAuth();

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signUp(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history, auth]
  );

  return (
    <MDBContainer>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <MDBInputGroup material hint="Enter Email" type="email" id="email" />
        <MDBInputGroup material hint="Password" type="password" id="password" />
        <MDBBtn type="submit">Login</MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default withRouter(Signup);
