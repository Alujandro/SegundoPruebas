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
  query,
  where,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

//*** Enlace a las bibliotecas Firebase -> https://firebase.google.com/docs/web/learn-more?authuser=0#libraries-cdn

window.onload = () => {
  // ****** Firebase ************************************/
  //const d = document; // Acceso fácil.
  let datos = document.getElementById("datos"); // Contenedor de datos.

  /*** Conexión con la base de datos.
   * getFirestone   -> Conexión al servicio Firestone.
   * collection     -> Enlace a la colección de la base de datos.
   */
  const db = getFirestore(app);
  const productosColeccion = collection(db, "productos"); //Nombre de mi colección
  const listasColeccion = collection(db, "listas");

  /*** Leer datos.
   *  doc         -> Obtiene la referencia a un documento. Parámetros -> referencia a una colección y un id.
   *  getDoc      -> Obtiene los datos de un documento. Parámetro -> referencia a un documento.
   *  getDocs     -> Obtiene todos los documentos de una colección. Parámetro -> referencia a una colección.
   *  onSnapShot  -> Obtiene enlace en tiempo real a la base de datos.
   *  data()      -> Método para acceder a la información del documento.
   *  id          -> identificacdor del documento (está fuera del método data()).
   */

  //*** Uso del doc *****************/
/*   const pruebaDoc = async (id) => {
    // Referencia al documento (sólo el id).
    const pruebaRef = await doc(productosColeccion, id);
    // Se obtiene el documento de la colección.
    const pruebaDoc = await getDoc(pruebaRef);
    console.log(`Impreso desde pruebaRef: ${pruebaRef.id}`);
    console.log(
      `Impreso desde pruebaDoc: ${pruebaDoc.id} ${pruebaDoc.data().nombre}`
    );
  };
 */  //pruebaDoc("LCy8664CnKt93gzwQfkr");

  const obtenerListasSnap = async () => {
    const feosDocumentos = await onSnapshot(listasColeccion, (col) => {
      datos.innerHTML = "";
      col.docs.map((documento) => {
        //datos.innerHTML += plantillas.pintarFila(documento); //Tenemos que hacer nuestra propia plantilla
        console.log(plantillas.log2(documento));
      });
    });
  };
  obtenerListasSnap();

  /* Filtrar datos
   *   query   -> Filtrar los resultados de la consulta. Parámetros -> colección y sentencia where.
   *   where   -> Especifica las condiciones que los documentos deben cumplir.
   *     (<, <=, ==, >, >=, !=, array-contains, array-contains-any, in y not-in)
   *   orderBy -> Ordenar los documentos de una colección. Parámetros -> clave y tipo de ordenación.
   *   limit   -> Limita la cantidad de documentos consultados. Parámetros -> número de documentos.
   */

  const filtrarProductos = async (campo, valor) => {
    const consulta = query(
      productosColeccion,
      where(campo, ">", valor)  //Consulta que te da todos los productos con valor superior al que se le pasa
    );
    /*  const consulta = query(
      productosColeccion,
      where(campo, "!=", valor),
      orderBy(campo, "desc"),
      limit(5)
    ); */
    /* const consulta = query(
      productosColeccion,
      where("nombre", "==", "Pedro"),
      where("aficiones", "array-contains", "carreras")
    ); */
    const feosFiltrados = await getDocs(consulta);
    feosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFila(documento);
      console.log(plantillas.log(documento));
    });
  };

  filtrarProductos("peso", 1);
}; // Fin window.load.