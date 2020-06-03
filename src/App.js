import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./services/router";
import Navbar from "./components/navbar/Navbar";
import Firebase from "./config/firebase";
import FirebaseContext from "./config/firebaseContext";
import { AuthProvider } from "./config/Auth";
import { AgilityProvider } from "./config/AgilityCMSConfig";

function App() {
  return (
    <FirebaseContext.Provider value={Firebase}>
      <AuthProvider>
        <AgilityProvider>
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </AgilityProvider>
      </AuthProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
