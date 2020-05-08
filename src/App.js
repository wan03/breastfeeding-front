import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import service from './services/servicetest';

console.log(service.add(4,3));

  // Set the configuration for your app
  const firebaseConfig = {
    apiKey: "AIzaSyCNXsTrF1Z-9NqIJCuicxJ_WisfwjdAw2k",
    authDomain: "breastfeeding-app-447b5.firebaseapp.com",
    databaseURL: "https://breastfeeding-app-447b5.firebaseio.com",
    projectId: "breastfeeding-app-447b5",
    storageBucket: "breastfeeding-app-447b5.appspot.com",
    messagingSenderId: "1061221728275",
    appId: "1:1061221728275:web:27c620f0d7fb8e2b9b3fe6"
  };

  firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
