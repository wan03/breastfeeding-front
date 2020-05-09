import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import fire from "../../config/firebase";
import { AuthContext } from "../../config/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
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
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />{" "}
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />{" "}
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
