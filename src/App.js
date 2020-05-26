import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./services/router";
import Navbar from "./components/navbar/Navbar";
import Firebase from "./config/firebase";
import FirebaseContext from "./config/firebaseContext";
import { AuthProvider } from "./config/Auth";

function App() {
  return (
    <FirebaseContext.Provider value={Firebase}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </AuthProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
