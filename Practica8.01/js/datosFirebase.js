"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7vIYvUHlEmTSv81yHZ19xMZ-Er9lp8w",
  authDomain: "lista-compra-d2e82.firebaseapp.com",
  projectId: "lista-compra-d2e82",
  storageBucket: "lista-compra-d2e82.appspot.com",
  messagingSenderId: "40667670975",
  appId: "1:40667670975:web:a666ec0f10d1a7e747190a",
  measurementId: "G-1R1Q0JM47N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};
//const analytics = getAnalytics(app);