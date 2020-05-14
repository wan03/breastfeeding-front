import React from "react";
import "./App.css";
import Routes from "./services/router";
import Navbar from "./components/navbar/navbar";
import Firebase from "./config/firebase";
import FirebaseContext from "./config/firebaseContext";
import { AuthProvider } from "./config/Auth";

function App() {
  return (
    <FirebaseContext.Provider value={Firebase}>
    <AuthProvider>
      <Navbar />
      <Routes />
    </AuthProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
