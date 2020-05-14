import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../config/Auth";

const Login = ({ history }) => {

  /**
   * Get the Auth instance from context
   */

  const auth = useAuth();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      if(email && password) {
      try {
        await auth.signIn(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }
    },
    [history]
  );

  return (
    <div>
      <h1> Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default withRouter(Login);
