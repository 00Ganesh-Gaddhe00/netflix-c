
// import firebase from "firebase/compat/app";

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyAfGpDuJMcz6VUM7-HmdHrOs0TgFoD-uQs",
    authDomain: "netflix-c-8a3ea.firebaseapp.com",
    projectId: "netflix-c-8a3ea",
    storageBucket: "netflix-c-8a3ea.appspot.com",
    messagingSenderId: "811767670925",
    appId: "1:811767670925:web:798bb6733b8c9a2a9a1ac4"
  };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);


  export {auth}
  export default db
