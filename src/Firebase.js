// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq6y9MtZFvnKg64CmnXFRjaGSnfuyPoZ8",
  authDomain: "todoit-81310.firebaseapp.com",
  projectId: "todoit-81310",
  storageBucket: "todoit-81310.appspot.com",
  messagingSenderId: "729949598605",
  appId: "1:729949598605:web:05fb6e871c75f7a4a003c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize firestore
const db = getFirestore(app);
export default db;