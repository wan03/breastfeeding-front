import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import {Form, Button } from 'react-bootstrap';
import { AuthContext } from "../../config/Auth";
import FirebaseContext from "../../config/firebaseContext";

const Login = ({ history }) => {
  /**
   * Get the Firebase instance from context
   */
  const Firebase = React.useContext(FirebaseContext);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


  /**
   * Get the current user from context
   */
  const { currentUser } = useContext(AuthContext);

  /**
   * check to see if there is a current user, if so redirect
   */
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1> Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
    </div>
  );
};

export default withRouter(Login);
