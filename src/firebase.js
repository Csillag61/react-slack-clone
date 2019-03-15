import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

//const url="https://www.gstatic.com/firebasejs/5.9.0/firebase.js">

const config = {
    apiKey: "AIzaSyBiOAQ78VO9OY5QsugbyIGTYldi7bSEjoo",
    authDomain: "react-slack-clone-76c14.firebaseapp.com",
    databaseURL: "https://react-slack-clone-76c14.firebaseio.com",
    projectId: "react-slack-clone-76c14",
    storageBucket: "react-slack-clone-76c14.appspot.com",
    messagingSenderId: "596333842258"
  };
  firebase.initializeApp(config);


  export default firebase;