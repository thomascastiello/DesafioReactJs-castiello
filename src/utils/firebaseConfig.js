// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCTMmdtUljt_cbCM3jhQvCrw74yf6GlPHs",
  authDomain: "reactjs-castiello.firebaseapp.com",
  projectId: "reactjs-castiello",
  storageBucket: "reactjs-castiello.appspot.com",
  messagingSenderId: "731342434436",
  appId: "1:731342434436:web:023939b9cf0ba686efd2d1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

