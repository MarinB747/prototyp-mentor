import firebase from "firebase/app";
import React, { useEffect } from "react";

export const FirebaseProvider: React.FC = ({ children }) => {
  useEffect(initFirebase, []);

  function initFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAshrWntrCvy6t_mriZvMjKhx4cn7Yw120",
        authDomain: "prototyp-mentor.firebaseapp.com",
        projectId: "prototyp-mentor",
        storageBucket: "prototyp-mentor.appspot.com",
        messagingSenderId: "722773717096",
        appId: "1:722773717096:web:6560348b1b6cfa50b2cbdd",
        measurementId: "G-FQB21PZ6PV"
      });
    }
  }
  return <>{children}</>;
};
