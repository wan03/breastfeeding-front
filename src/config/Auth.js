import React, { useEffect, useState, useContext, createContext } from "react";
import FirebaseContext from "../config/firebaseContext";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    /**
   * Get the Firebase instance from context
   */
  const Firebase = React.useContext(FirebaseContext);
  
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
