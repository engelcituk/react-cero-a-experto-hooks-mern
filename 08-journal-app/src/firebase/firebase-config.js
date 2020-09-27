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

  const firebaseConfigTesting = {
    apiKey: "AIzaSyCe1EBq297tO5ibt63c2GKTehqrmzbhJOM",
    authDomain: "login-app-88906.firebaseapp.com",
    databaseURL: "https://login-app-88906.firebaseio.com",
    projectId: "login-app-88906",
    storageBucket: "login-app-88906.appspot.com",
    messagingSenderId: "369450352352",
    appId: "1:369450352352:web:1b5dd09d382655b9be5a85"
  };

if (process.env.NODE_ENV === 'test') {
  firebase.initializeApp(firebaseConfigTesting);  
} else {
  //dev/prod
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

  const db =  firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }