import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBV_Kc4xfWKvF5MjSzMw61b3XL0HKAtgrI",
    authDomain: "react-app-mern-course.firebaseapp.com",
    databaseURL: "https://react-app-mern-course.firebaseio.com",
    projectId: "react-app-mern-course",
    storageBucket: "react-app-mern-course.appspot.com",
    messagingSenderId: "453932240479",
    appId: "1:453932240479:web:97b2a55d996ae2129795ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db =  firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }