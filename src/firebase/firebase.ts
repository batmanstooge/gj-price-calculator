// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFM6aJd3XLPmj_dz_oJBc8u6NPkEdoLLU",
  authDomain: "gj-price-calculator.firebaseapp.com",
  projectId: "gj-price-calculator",
  storageBucket: "gj-price-calculator.appspot.com",
  messagingSenderId: "440591117322",
  appId: "1:440591117322:web:e53f5bfec9612fa5b0c3f3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = app.auth();
