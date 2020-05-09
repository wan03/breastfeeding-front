import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./config/Auth";
//Pages
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Dashboard from "../pages/dashboard/dashboard";
import AddPhoto from "../pages/add-photo/addphoto";
import SignUp from "../pages/sign-up/SignUp";
import SignIn from "../pages/sign-in/SignIn";

export default function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addphoto">
            <AddPhoto />
          </Route>
          <Route path="/loginin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
