"use strict";

import * as plantillas from "./plantillasFirebase.js";
import { app } from "./datosFirebase.js";
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

window.onload = () => {
  let datos = document.getElementById("datos"); // Contenedor de datos.

  /*** Conexión con la base de datos.
   * getFirestone   -> Conexión al servicio Firestone.
   * collection     -> Enlace a la colección de la base de datos.
   */
  const db = getFirestore(app);
  const productosColeccion = collection(db, "productos"); //Nombre de mi colección
  const listasColeccion = collection(db, "listas");
  const usuariosColeccion = collection(db, "usuarios");

//Introducción a como añadir documentos a una colección, recibe nombre y propietario.
const anadeLista= async (nom, prop) =>{
  let produ=[];
  let fecha=new Date();
  const datoLista={
    fecha: fecha,
    nombre: nom,
    productos: produ,
    propietario: prop
  }
  const archivo=await addDoc(listasColeccion,datoLista);
}
//anadeLista("Lista de la Rosalía", "rosalia");  //------------------- Usar para añadir más listas -----------------------------

//Introducción a borrar un documento
//Borra la lista de la compra completa
const borraDoc= async(id) => {
  const borra=await deleteDoc(doc(db, "listas", id));
}
//borraDoc("EAxak3jzUiQafS7GXCHx"); //Pasar el id del documento para eliminarlo, usar para borrar la lista de las 22:14


//La idea sería que cada lista sea una especie de formulario que se puede modificar siempre y el botón de editar sea un botón de guardar que cambia la base de datos
//La idea para obtener estos datos sería obteniendo el id+nombre/id+fecha/id+propietario con getElementById(id+"fecha");
//Funciones para editar las listas
const editDocNombre= async(dat, id) => {
  const cambia=await updateDoc(doc(db, "listas", id), {
    nombre: dat
  });
}
//editDocNombre("Ramón", "ZZo9MQJV5sZMcxGxP0t1"); //Es perfecto (sería mejor tener lo de listas en una constante, pero ya es tarde), funciona
const editDocFecha= async(dat, id) => {
  const cambia=await updateDoc(doc(db, "listas", id), {
    fecha: dat
  });
}
//Esto lo usaría para tanto añadir como editar productos
const editDocProductos= async(dat, id) => {
  const cambia=await updateDoc(doc(db, "listas", id), {
    productos: dat
  });
}
//editDocProductos(["prod1","prod2","prod3"],"J2Zjt1dalIczuSXQBsFy");
const editDocPropietario= async(dat, id) => {
  const cambia=await updateDoc(doc(db, "listas", id), {
    propietario: dat
  });
}
//editDocPropietario("Santiago","J2Zjt1dalIczuSXQBsFy");

//Funciones para editar producto
//No confundir con las funciones para editar las listas
const editDocCantProd= async(dato, id) => {
  const cambia=await updateDoc(doc(db, "productos", id), {
    cantidad: dato
  });
}
const editDocNomProd= async(dato, id) => {
  const cambia=await updateDoc(doc(db, "productos", id), {
    nombre: dato
  });
}
const editDocPeso= async(dato, id) => {
  const cambia=await updateDoc(doc(db, "productos", id), {
    peso: dato
  });
}
const editDocPrecPro= async(dato, id) => {
  const cambia=await updateDoc(doc(db, "productos", id), {
    precio: dato
  });
}

//Obtención de documentos
  const obtenerListasSnap = async () => {
    const feosDocumentos = await onSnapshot(listasColeccion, (col) => {
      datos.innerHTML = "";
      col.docs.map((documento) => {
        console.log(plantillas.log2(documento));
        console.log("ID: "+documento.id);
      });
    });
  };
  //obtenerListasSnap(); 

  const existeUser = async (user) => {
    let pinchi=false;
    const usuarios = await onSnapshot(usuariosColeccion, (use) => {
      use.docs.map((documento) => {
        if (documento.data().nombre!=user){
          pinchi=true;
        }
      });
    });
    return pinchi;
  };
  const ret=existeUser("rosalia").then(ret => console.log(ret));

  const filtrarProductos = async (campo, comparador, valor) => {
    const consulta = query(
      productosColeccion,
      where(campo, comparador, valor)  //Consulta que te da todos los productos con valor superior al que se le pasa
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFila(documento);
      console.log(plantillas.log(documento));
    });
  };

  const filtrarNombre = async (nombre) => {
    const consulta = query(
      productosColeccion,
      where("nombre","==", nombre)
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFila(documento);
      console.log(plantillas.log(documento));
    });
  }
  const filtrarPrecio = async (precio, comparador) => {
    const consulta = query(
      productosColeccion,
      where("precio",comparador,precio)
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFila(documento);
      console.log(plantillas.log(documento));
    });
  }
  const filtrarPeso = async (peso, comparador) => {
    const consulta = query(
      productosColeccion,
      where("peso",comparador,peso)
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFila(documento);
      console.log(plantillas.log(documento));
    });
  }

  //filtrarProductos("peso", ">", 1);
}; // Fin window.load.