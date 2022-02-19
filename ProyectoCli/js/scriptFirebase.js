"use strict";

import * as plantillas from "./plantillasFirebase.js";
import { app, autentico } from "./datosFirebase.js";
//import { auth } from "./datosFirebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  onSnapshot,
  doc,
  deleteDoc,
  query,
  addDoc,
  updateDoc,
  where,
  orderBy,
  limit,
  arrayUnion,
  arrayRemove
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";


window.onload = () => {
  /**
   * 
   * Variables y constantes globales
   * 
   */
  const db = getFirestore(app);
  const librosColeccion = collection(db, "libros");
  const usuariosColeccion = collection(db, "usuarios");
  var usuarioActivo = "";
  var nomUsu="";

  /* 
  *
  * Manejo de login y usuarios
  * 
  */

  //Crear usuario
  const creaUser=(email, password, nombre) => {
    createUserWithEmailAndPassword(autentico, email, password)
    .then((dataUser) => {
      // Signed in
      //Cambia el displayName
      anadeUser(dataUser.user.uid,nombre);
      console.log(dataUser.user.uid);
      // ...
    })
    .catch((error) => {
      //console.log(error);
      console.log(error.message);
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
      console.log(dataUser.user.email);
      // ...
    })
    .catch((error) => {
      console.log("Error: usuario o contraseña incorrectos");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  //Cambio de estado en la sesión de usuario
  onAuthStateChanged(autentico, (usuario) => {
    if (usuario) {
      usuarioActivo=usuario.uid;
      //A partir de aquí introducir el código que muestra la pantalla iniciada
      formLibro();
      muestraList();
      getLista();
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

  /**
   * 
   * Modificar colecciones de datos, añadir, eliminar y actualizar elementos o datos de las colecciones
   * 
   */

  //Añade libros a la colección, recibe nombre, propietario(por nombre) y número de páginas.
  const anadeLibro= async (nom, prop, pag) =>{
    const datoLibro={
      estado: "pendiente",
      nombre: nom,
      paginas: pag,
      propietario: prop
    }
    const archivo=await addDoc(librosColeccion,datoLibro);
    anadeLibroUser(archivo.id);
    document.getElementById("cont3").innerHTML="Libro añadido satisfactoriamente";  //Salida de texto
    getLista();
  }

  //Borra un libro
  const borraLibro= async (id) =>{
    const archivo=await deleteDoc(doc(db,"libros",id));
    borraLibroUser(id);
    console.log("Libro eliminado satisfactoriamente");  //Salida de texto
  }

  //Recibe estado e id y le cambia el estado al libro
  const updateLibro= async (id,estado) =>{
    const estadoLibro={
      estado: estado
    }
    const archivo=await updateDoc(doc(db,"libros",id),estadoLibro);
    getLista();
  }

  //Añade usuarios a la colección de usuarios recibe el user.displayName y el user.id, creará al usuario usando el mismo id que la cuenta de autenticación
  const anadeUser= async (id, nom) =>{
    const datoUser={
      libros: [],
      nombre: nom
    }
    const archivo=await setDoc(doc(db, "usuarios", id), datoUser);
    document.getElementById("cont3").innerHTML="Usuario añadido satisfactoriamente";  //Salida de texto
  }

  //Añade un libro a la lista de libros (guarda el id)
  const anadeLibroUser= async (id) =>{
    const datoUser=await updateDoc(doc(db,"usuarios",usuarioActivo),{
      libros: arrayUnion(id)
    });
  }

  //Elimina un libro de la lista de libros, recibimos el ID del libro que vamos a borrar
  const borraLibroUser= async (id) =>{
    const datoUser=await updateDoc(doc(db,"usuarios",usuarioActivo),{
      libros: arrayRemove(id)
    });
    getLista();
  }

  /**
   * 
   * Obtención de colección de datos
   * 
   */
  //Obtención por tipo
   const filtrarLibrosEstado = async (estado) => {
    const consulta = query(
      productosColeccion,
      where("estado", "==", valor)  //Consulta que te da todos los libros con el estado que se le pasa
    );
    const productosFiltrados = await getDocs(consulta);
  }

  //Obtiene un único libro por ID y lo muestra donde toca y añade los listeners necesarios
  const getLibroID = async (id) => {
    const libro=await getDoc(doc(db,"libros",id));
    let plant=plantillas.pintarLibro(libro);
    let boton=document.createElement("button");
    boton.className="borrar";
    boton.innerHTML="Eliminar";
    boton.addEventListener("click", (e) => {
      borraLibro(e.target.parentElement.id);
    });

    if (libro.data().estado=="pendiente"){
      let pendiente=document.getElementById("pendientes");

      let botLee=document.createElement("button");
      botLee.className="lectura";
      botLee.innerHTML="Leer";

      botLee.addEventListener("click", (e) => {
        updateLibro(e.target.parentElement.id,"leyendo");
      });

      plant.appendChild(botLee);
      plant.appendChild(boton);

      pendiente.appendChild(plant);
    }
    if (libro.data().estado=="leyendo"){
      let leyendo=document.getElementById("leyendos");

      let botTerm=document.createElement("button");
      botTerm.className="terminar";
      botTerm.innerHTML="Terminar";

      botTerm.addEventListener("click", (e) => {
        updateLibro(e.target.parentElement.id,"leido");
      });

      plant.appendChild(botTerm);
      plant.appendChild(boton);

      leyendo.appendChild(plant);
    }
    if (libro.data().estado=="leido"){
      let leido=document.getElementById("leidos");

      plant.appendChild(boton);
      leido.appendChild(plant);
    }
  }

  //Obtiene la lista de libros del usuario activo
  const getLista = async () => {
    const us=await getDoc(doc(db,"usuarios",usuarioActivo));
    let salida=document.getElementById("cont3");
    salida.innerHTML="";

    let pendiente=document.createElement("div");
    pendiente.id="pendientes";
    pendiente.innerHTML="<h3>Pendientes</h3>";

    let leyendo=document.createElement("div");
    leyendo.id="leyendos";
    leyendo.innerHTML="<h3>Leyendo</h3>";

    let leido=document.createElement("div");
    leido.id="leidos";
    leido.innerHTML="<h3>Leídos</h3>";

    salida.appendChild(pendiente);
    salida.appendChild(leyendo);
    salida.appendChild(leido);

    let listaLib=us.data().libros;
    nomUsu=us.data().nombre;
    cabecera();
    for (let i=0; i<listaLib.length; i++){
      getLibroID(listaLib[i]);
    }
  }
  
  /**
   * 
   * Formularios
   * 
   */

  //Formulario para la creación de usuario
  const formUser=() =>{
    let login=document.getElementById("cont1");
    let cruse=document.getElementById("cont2");
    login.style.display="none";
    cruse.appendChild(plantillas.pintaForm());
    listenersCrear();
  }

  //Formulario par añadir un libro
  const formLibro=() =>{
    let login=document.getElementById("cont1");
    let pagi=document.getElementById("cont2");
    login.style.display="none";
    let dib=plantillas.formLibro();
    pagi.appendChild(dib);
    listenersLibro();
  }

  /**
   * 
   * Información de la cabecera
   * 
   */
  const cabecera=() =>{
    let cabeza=document.getElementById("cabecera");
    cabeza.innerHTML="";
    cabeza.appendChild(plantillas.textoCabesa(nomUsu));
    listenersCabeza();
  }

  /*
  *
  * Listeners
  * 
  */

 //Listener de los botones de login
  const listenersInicio=() =>{
    let comprobar=document.getElementById("comprobar");
    let crear=document.getElementById("crear");
    comprobar.addEventListener("click",(e)=>{
      let usu=document.getElementById("usuario").value;
      let contras=document.getElementById("contras").value;
      logIn(usu,contras); //Mejorar
    });
    crear.addEventListener("click",(e)=>{
      formUser();
    });
  }

  //Listener de la cabecera
  const listenersCabeza=()=>{
    let volver=document.getElementById("salir");
    volver.addEventListener("click", (e)=>{
      logOut();
      window.location.reload(true);
    })
  }
  //Listener de los botones de crear usuarios
  const listenersCrear=() =>{
    let crear=document.getElementById("guardausu");
    let volver=document.getElementById("volver");
    //Hace toda la comprobación de usuario
    crear.addEventListener("click", (e) => {
      const patron=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      let nom=document.getElementById("cnombre").value;
      let mnom=document.getElementById("mnombre").value;
      let pas1=document.getElementById("ccontras1").value;
      let pas2=document.getElementById("ccontras2").value;
      if (patron.test(nom)){
        if (pas1==pas2 && pas1!=""){
          console.log("Creando usuario...");
          creaUser(nom,pas1,mnom);
          nom="";
          mnom="";
          pas1="";
          pas2="";
        } else {
          console.log("La contraseña no es válida o no coinciden");
          alert("La contraseña no es válida o no coinciden");
        }
      } else {
        console.log("Introduce un correo válido");
        alert("Introduce un correo válido");
      }
    });
    //Recarga la página, devolviendo todo a su estado original.
    volver.addEventListener("click", (e) => {
      window.location.reload(true);
    });
  }

  //Listeners para el formulario de crear libro
  const listenersLibro=() =>{
    let crear=document.getElementById("newlibro");
    crear.addEventListener("click", (e) => {
      let titulo=document.getElementById("lnombre").value;
      let propietario=document.getElementById("pronombre").value;
      let pags=document.getElementById("paginas").value;
          console.log("Añadiendo libro...");
          anadeLibro(titulo,propietario,pags);
          titulo="";
          propietario="";
          pags="";
      
    });
  }

  //Listener para ocultar y mostrar y ocultar el formulario de añadir libro
  const muestraList=() =>{
    let muestrao=document.getElementById("mostrocul");
    muestrao.addEventListener("click", (e) => {
      if (muestrao.innerHTML=="Mostrar"){
        muestrao.innerHTML="Ocultar";
        document.getElementById("nuevolibro").style.display="initial";
      } else {
        document.getElementById("nuevolibro").style.display="none";
        muestrao.innerHTML="Mostrar";
      }
    });
  }
  listenersInicio();
}; // Fin window.load