import React, { useCont, useContext } from "react";
import { Route, redirect, Redirect } from "react-router-dom";
import { AuthContext } from "../config/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  /**
   * getting the current user from context that was stored
   */
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};
