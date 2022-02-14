"use strict";

import * as plantillas from "./plantillasFirebase.js";
import { app, autentico } from "./datosFirebase.js";
//import { auth } from "./datosFirebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  deleteDoc,
  query,
  addDoc,
  updateDoc,
  where,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


window.onload = () => {

  const db = getFirestore(app);
  const librosColeccion = collection(db, "libros");
  const usuariosColeccion = collection(db, "usuarios");

  /* 
  * Manejo de login y usuarios
  */
  //Crear usuario
  const creaUser=(email, password, nombre) => {
    createUserWithEmailAndPassword(autentico, email, password)
    .then((dataUser) => {
      // Signed in
      const user = dataUser.user;
      //Cambia el displayName
      return dataUser.user.updateProfile({
        displayName: nombre
      });
      // ...
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  //Login de usuario
  const logIn=(email, password) => {
    signInWithEmailAndPassword(autentico, email, password)
    .then((dataUser) => {
      // Signed in
      console.log(dataUser.user);
      console.log(dataUser.user);
      // ...
    })
    .catch((error) => {
      console.log("Error: usuario o contraseña incorrectos");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  onAuthStateChanged(autentico, (usuario) => {
    if (usuario) {
      console.log(usuario.uid);
      //A partir de aquí introducir el código que muestra la pantalla iniciada
      console.log(usuario.email);
      filtrarListas("propietario","==","Carlos");
    } else {
      console.log("No se ha iniciado sesión");
    }
  });
  //Logout de usuario
  const logOut=() =>{
    signOut(autentico).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const listenersInicio=() =>{
    let comprobar=document.getElementById("comprobar");
    let crear=document.getElementById("crear");
    comprobar.addEventListener("click",(e)=>{
      logIn(); //Mejorar
    });
    crear.addEventListener("click",(e)=>{
      creaUser(); //Mejorar
    });
  }
}; // Fin window.load