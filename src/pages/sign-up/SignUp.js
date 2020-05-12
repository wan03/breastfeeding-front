import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import {Form, Button } from 'react-bootstrap';
import FirebaseContext from "../../config/firebaseContext";

const Signup = ({ history }) => {
  /**
   * Get the Firebase instance from context
   */
  const Firebase = React.useContext(FirebaseContext);


  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


  return (
    <div>
      <h1> Sign Up Page</h1>
      <Form onSubmit={handleSignUp}>
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

export default withRouter(Signup);
