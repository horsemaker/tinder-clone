import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGPwNDGjvFRlaJ-0yl4wz2AmyD_21KEtM",
    authDomain: "tinder-clone-bc1d9.firebaseapp.com",
    databaseURL: "https://tinder-clone-bc1d9.firebaseio.com",
    projectId: "tinder-clone-bc1d9",
    storageBucket: "tinder-clone-bc1d9.appspot.com",
    messagingSenderId: "436421525349",
    appId: "1:436421525349:web:56b530e6ac67813c4a2b8c",
    measurementId: "G-F290V1SQER"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;