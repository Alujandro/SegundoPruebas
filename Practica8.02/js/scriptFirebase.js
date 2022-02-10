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

  const db = getFirestore(app);
  const productosColeccion = collection(db, "productos"); //Nombre de mi colección
  const listasColeccion = collection(db, "listas");
  //const usuariosColeccion = collection(db, "usuarios");
  var listaProductos=[]; //Esta variable es "global", para guardar una lista con todos los productos y usarla para mostrar los productos por pantalla
  var listaActiva=""; //Esta variable va a guardar el id de la lista que va a ser modificada, esto debería facilitar el trabajo

//Añadir documentos a una colección, recibe nombre y propietario.
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

//Conseguir lista
const getLista= async (id) => {
  const laLista=await getDoc(doc(db, "listas", id));
}

//Borra la lista de la compra completa
const borraLista= async(elemento) => {
  let id=elemento.parentElement.parentElement.parentElement.parentElement.id;
  let confirmacion=confirm("¿Seguro que quieres borrar la lista?");
  if (confirmacion){
    const borra=await deleteDoc(doc(db, "listas", id));
    document.getElementById(id).remove();
    alert("Lista borrada con éxito");
  }
}

//Funciones para editar las listas
const editDocNombre= async(dat, id) => {
  const cambia=await updateDoc(doc(db, "listas", id), {
    nombre: dat
  });
}

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
const borraProducto= (elemento) => {
  let id=elemento.parentElement.parentElement.id;
  let index = listaProductos.indexOf(id);
  if (index !== -1) {
    listaProductos.splice(index, 1);
  }
  editDocProductos(listaProductos,id);
}

const editDocPropietario= async(dat, id) => {
  const cambia=await updateDoc(doc(db, "listas", id), {
    propietario: dat
  });
}

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
    let salida=document.getElementById("datos");
    const promesa = await onSnapshot(listasColeccion, (col) => {
      salida.innerHTML="";
      col.docs.map((documento) => {
        salida.innerHTML+=plantillas.pintarLista(documento);
      });
      nuevoEnd();
    });
  };
  obtenerListasSnap(); //Para comprobar cómo funciona

  const obtenerLista = async (id) => {
    let salida=document.getElementById("datos");
    let tabla=document.createElement("table");
    tabla.className="prodList";
    salida.innerHTML="";
    const promesa = await getDoc(doc(db,"listas", id));
    tabla.innerHTML= plantillas.pintarLista(promesa);
    salida.appendChild(tabla);

  }
  const addProds = (id) => {
    obtenerLista(id);
    muestraProductos(id);
  }
  
  //Obtención de productos
  const obtenerProductoSnap = async () => {
    listaProductos=[]; //Vaciamos el array de productos
    const promesa = await onSnapshot(productosColeccion, (col) => {
      col.docs.map((documento) => {
        listaProductos.push(documento); //Llenamos el array con los productos.
      });
    });
  };

  //Obtiene una fila de producto lista para imprimir
  const getProducto = async (id,idTabla) => {
    let nohay=false;
    let tablaList=document.getElementById("p"+idTabla);
    if (tablaList==null){
      tablaList=document.createElement("table");
      tablaList.id="p"+idTabla;
      nohay=true;
    }
    const producto = await getDoc(doc(db, "productos", id));
    if (producto.exists()){
      let escribir=plantillas.pintarFila(producto);
      tablaList.innerHTML+=escribir;
    }
    if (nohay){
      let salida=document.getElementById("datos");
      salida.appendChild(tablaList);
    }
  }

  //Función que muestra los productos de la lista
  const muestraProductos = async (id) => {
    let tablaList=document.getElementById("p"+id);
    if (tablaList!=null){
      tablaList.innerHTML="";
    }
    const listado = await getDoc(doc(db, "listas", id));
    listaProductos=listado.data().productos;
    listaProductos.forEach(producto => {
      getProducto(producto,id);
    });
  }

//Comprobación de la existencia de usuarios
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
  //const ret=existeUser("rosalia").then(ret => console.log(ret));


  //Consultas para filtrar la base de datos
  const filtrarProductos = async (campo, comparador, valor) => {
    const consulta = query(
      productosColeccion,
      where(campo, comparador, valor)  //Consulta que te da todos los productos con valor superior al que se le pasa
    );
    const productosFiltrados = await getDocs(consulta);
    productosFiltrados.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarFila(documento);
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


  //Listeners para los botones de eliminar
  const nuevoEnd=() => {
    let eliminacion=document.getElementsByClassName("eliminar");
    let borrado=document.getElementsByClassName("borrar");
    let muestras=document.getElementsByClassName("mostrar");
    let increm=document.getElementsByClassName("masProd");
    console.log(increm);
    for (let elemento of eliminacion) {
      elemento.addEventListener("click", (e)=>{borraLista(e.target)}); //Borra la lista
    };
    for (let elemento of muestras) {
      elemento.addEventListener("click", (e)=>{muestraProductos(e.target.parentElement.parentElement.parentElement.parentElement.id)}); //Muestra la lista de productos
    };
    for (let elemento of borrado) {
      elemento.addEventListener("click", (e)=>{borraProducto(e.target)}); //Elimina el producto de la lista de la compra
    };
    for (let elemento of increm) {
      elemento.addEventListener("click", (e)=>{addProds(e.target.parentElement.parentElement.parentElement.parentElement.id);}); //Pasa al menú de añadir productos
    };
  }
}; // Fin window.load