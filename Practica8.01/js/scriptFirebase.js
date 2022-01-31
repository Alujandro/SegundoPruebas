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
  let datos = document.getElementById("datos"); //Div para la salida de datos
  let opciones = document.getElementById("opciones"); //Div para los opciones de filtrar

  const db = getFirestore(app);
  const productosColeccion = collection(db, "productos"); //Nombre de mi colección

//Obtención de productos
  const obtenerListasSnap = async () => {
    const feosDocumentos = await onSnapshot(productosColeccion, (col) => {
      datos.innerHTML = "";
      datos.innerHTML+=plantillas.pintarProductos();
      let tabla=document.createElement("table");
      tabla.innerHTML="<tr><th>Cantidad</th><th>Nombre</th><th>Peso</th><th>Precio</th><th>Subtotal</th></tr>";
      col.docs.map((documento) => {
        tabla.innerHTML+=plantillas.pintarFila(documento);
      });
      datos.appendChild(tabla);
      tabla.innerHTML+=plantillas.total();
    });
  };
  obtenerListasSnap();

  //Filtros de productos

  //Filtro general
  const filtrarProductos = async (campo, comparador, valor) => {
    datos.innerHTML = "";
    datos.innerHTML+=plantillas.pintarProductos();
    let tabla=document.createElement("table");
    tabla.innerHTML="<tr><th>Cantidad</th><th>Nombre</th><th>Peso</th><th>Precio</th><th>Subtotal</th></tr>";
    const consulta = query(
      productosColeccion,
      where(campo, comparador, valor)
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      tabla.innerHTML += plantillas.pintarFila(documento);
    });
    datos.appendChild(tabla);
    tabla.innerHTML+=plantillas.total();
  };
  const filtrarProductosAsc = async (campo, comparador, valor) => {
    datos.innerHTML = "";
    datos.innerHTML+=plantillas.pintarProductos();
    let tabla=document.createElement("table");
    tabla.innerHTML="<tr><th>Cantidad</th><th>Nombre</th><th>Peso</th><th>Precio</th><th>Subtotal</th></tr>";
    const consulta = query(
      productosColeccion,
      where(campo, comparador, valor),
      orderBy("nombre","asc")
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      tabla.innerHTML += plantillas.pintarFila(documento);
    });
    datos.appendChild(tabla);
    tabla.innerHTML+=plantillas.total();
  };
  const filtrarProductosDesc = async (campo, comparador, valor) => {
    datos.innerHTML = "";
    datos.innerHTML+=plantillas.pintarProductos();
    let tabla=document.createElement("table");
    tabla.innerHTML="<tr><th>Cantidad</th><th>Nombre</th><th>Peso</th><th>Precio</th><th>Subtotal</th></tr>";
    const consulta = query(
      productosColeccion,
      where(campo, comparador, valor),
      orderBy("nombre", "desc")
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      tabla.innerHTML += plantillas.pintarFila(documento);
    });
    datos.appendChild(tabla);
    tabla.innerHTML+=plantillas.total();
  };

  //Filtros específicos
  const filtrarNombre = async (nombre) => {
    const consulta = query(
      productosColeccion,
      where("nombre","==", nombre)
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFila(documento);
      //console.log(plantillas.log(documento));
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
      //console.log(plantillas.log(documento));
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
      //console.log(plantillas.log(documento));
    });
  }

  function pulsar(){
    let campo=document.getElementById("campo").value.toLowerCase();
    let valor=document.getElementById("valor").value;
    let asc=document.getElementById("asc").checked;
    let desc=document.getElementById("desc").checked;


    if (campo=="nombre"){
      filtrarProductos(campo, "==", valor);
    } else if (campo==""){
      if (asc){
        filtrarProductosAsc("nombre", "!=", "-1");
      } else if (desc){
        filtrarProductosDesc("nombre","!=", "-1");
      } else {
        obtenerListasSnap();
      }
    } else {
      if (campo=="precio"){
        valor=parseFloat(valor);
      } else {
        valor=parseInt(valor);
      }
      if (asc) {
        filtrarProductosAsc(campo,"==", valor);
      } else if (desc) {
        filtrarProductosDesc(campo, "==", valor);
      } else {
        filtrarProductos(campo, "==", valor);
      }
    }
  }

  let cliqueo=document.getElementById("filtrar");
  cliqueo.addEventListener('click', function (evento){ pulsar() }); //Recibimos la función que se va a ejecutar al hacer clic
  

  //filtrarProductos("peso", ">", 1);
}; // Fin del programa.