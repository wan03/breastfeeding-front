import app from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Set the configuration for your app
const firebaseConfig = {
  apiKey: "AIzaSyCNXsTrF1Z-9NqIJCuicxJ_WisfwjdAw2k",
  authDomain: "breastfeeding-app-447b5.firebaseapp.com",
  databaseURL: "https://breastfeeding-app-447b5.firebaseio.com",
  projectId: "breastfeeding-app-447b5",
  storageBucket: "breastfeeding-app-447b5.appspot.com",
  messagingSenderId: "1061221728275",
  appId: "1:1061221728275:web:27c620f0d7fb8e2b9b3fe6",
};

const Firebase = app.initializeApp(firebaseConfig);

export const storage = app.storage();

export const firestore = app.firestore();

export default Firebase;
