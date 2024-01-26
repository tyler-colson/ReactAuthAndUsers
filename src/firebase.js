// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDb7AMvi55T-8tUpSDWih0EQp56chROzg",
  authDomain: "react-auth-and-user-page.firebaseapp.com",
  projectId: "react-auth-and-user-page",
  storageBucket: "react-auth-and-user-page.appspot.com",
  messagingSenderId: "44364179697",
  appId: "1:44364179697:web:ea2888a006b523ccdb6150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const database = getDatabase(app);

export {auth, database};