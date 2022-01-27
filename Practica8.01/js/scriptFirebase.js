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

//Obtención de documentos
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