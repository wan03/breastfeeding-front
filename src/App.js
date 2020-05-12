import React from "react";
import "./App.css";
import Routes from "./services/router";
import Navbar from "./components/navbar/navbar";
import Firebase from "./config/firebase";
import FirebaseContext from "./config/firebaseContext";

function App() {
  return (
    <FirebaseContext.Provider value={Firebase}>
      <Navbar />
      <Routes />
    </FirebaseContext.Provider>
  );
}

export default App;
