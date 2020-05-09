import React from "react";
import "./App.css";
import firebase from "firebase";
import service from "./services/servicetest";
import Routes from "./services/router";
import Navbar from "./components/navbar/navbar";

console.log(service.add(4, 3));

function App() {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
