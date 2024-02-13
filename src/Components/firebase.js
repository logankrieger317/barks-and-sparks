// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyVNJ_xPWCjqjjp-mzwYpDhSb7rNiwcQs",
  authDomain: "barks-and-sparks.firebaseapp.com",
  projectId: "barks-and-sparks",
  storageBucket: "barks-and-sparks.appspot.com",
  messagingSenderId: "327963055604",
  appId: "1:327963055604:web:da038bc376d86229ecd5a1",
  measurementId: "G-Q6128R6038"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)



export default database;