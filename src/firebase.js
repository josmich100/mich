import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCDujOAxqHETU1d-AM6gL1pM8CVma_JH9U",
    authDomain: "michina-b3eaa.firebaseapp.com",
    projectId: "michina-b3eaa",
    storageBucket: "michina-b3eaa.appspot.com",
    messagingSenderId: "671233964735",
    appId: "1:671233964735:web:90df14b19dfee2d8b9e40a",
    measurementId: "G-G31SWP13ZX"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db}