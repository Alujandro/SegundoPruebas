"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANjV0kD2YnPD3Sp7it2-fTh4dPk4dZ3oY",
  authDomain: "libros-8e910.firebaseapp.com",
  projectId: "libros-8e910",
  storageBucket: "libros-8e910.appspot.com",
  messagingSenderId: "95775774676",
  appId: "1:95775774676:web:6e56647e49b4613d01e841",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const autentico = getAuth(app);
export {app, autentico};