import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "../../src/config/Auth";
import PrivateRoute from "../config/PrivateRoute";
//Pages
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Dashboard from "../pages/dashboard/dashboard";
import AddPhoto from "../pages/add-photo/addphoto";
import SignUp from "../pages/sign-up/SignUp";
import Login from "../pages/sign-in/SignIn";

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/addphoto" component={AddPhoto} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default Routes;
