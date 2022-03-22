import firebase from "firebase";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBnSwegQkeHwqe979qKv-No-cWdKJUDzk",
  authDomain: "twitter-clone-i.firebaseapp.com",
  projectId: "twitter-clone-i",
  storageBucket: "twitter-clone-i.appspot.com",
  messagingSenderId: "7226190204",
  appId: "1:7226190204:web:041a1b64b9b6043b4ddcf9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;