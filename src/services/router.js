import React from "react";
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Dashboard from "../pages/dashboard/dashboard";
import AddPhoto from "../pages/add-media/AddMedia";
import SignUp from "../pages/sign-up/SignUp";
import SignIn from "../pages/sign-in/SignIn";
import Slideshow from "../pages/slideshow/Slideshow";

export default function Routes() {
  return (
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
          <Route path="/addmedia">
            <AddPhoto />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/slideshow">
            <Slideshow />
          </Route>
        </Switch>
  );
}
