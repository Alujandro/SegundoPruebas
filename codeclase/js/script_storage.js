"use strict";
import * as plantillas from "./plantillasJSON.js";
window.onload = () => {
  // ****** localStorage / sessionStorage ***************************/
  // setItem    --> crear una entrada en la base de datos.
  // getItem    --> obtener una entrada en la base de datos.
  // removeItem --> indica que valor hay que eliminar (recibe un key cmo parámetro).
  // key(n)     --> devuelve la clave enésima posición de la base de datos.
  // clear()    --> borrar la base de datos.
  // storage    --> evento que se ejecuta cuando hay cambios en la base de datos.

  // Comprobar si el navegador lo soporta.
  if (typeof Storage !== "undefined") {
    const db = localStorage; // Para facilitar la escritura del código.
    // Mirar el prototipo del objeto.
    console.log(db);

    db.setItem("nombre", "Guapo");
    db.setItem("nombre", "Feo");
    db.setItem("apellidos", "De Verdad");
    db.setItem("fecha", "1954");
    console.log(`${db.getItem("nombre")} ${db.getItem("apellidos")}`);
    // Mostrar toda la información de la base de datos.
    console.log("**** Contenido de la base de datos localStorage ****");
    for (let i = db.length - 1; i >= 0; i--) {
      console.log(`${db.key(i)} : ${db.getItem(db.key(i))}`);
    }
    console.log("****************************************************");
    // Borrar el almacenamiento.
    db.clear();
    console.log(db);

    // **** Usando JSON ***************************/
    // parse      --> genera un objeto JSON a partir de un cadena de un string.
    // stringify  --> genera un string a partir de un JSON.
    // Repaso el protoripo.
    console.log(JSON);

    const feos = [
      {
        nombre: "Juan",
        fecha: 1958,
        apellido: "García",
      },
      {
        nombre: "Antonio",
        fecha: 1987,
        apellido: "López",
      },
    ];

    db.setItem("usuarios", JSON.stringify(feos));
    console.log(db);

    let usuarios = JSON.parse(db.getItem("usuarios"));
    document.getElementById("datos").innerHTML =
      plantillas.pintarUserJSON(usuarios);

    // **** Guardar información ******************************** */

    document.getElementById("guardar").addEventListener(
      "click",
      () => {
        // Creo el objeto con los datos del formulario.
        let nuevo_usuario = {
          nombre: document.getElementById("nombre").value,
          apellido: document.getElementById("apellido").value,
          fecha: document.getElementById("fecha").value,
        };
        // Introduzco el usuario en el objeto JSON.
        usuarios.push(nuevo_usuario);
        // Guardo el usuario en la base de datos.
        db.setItem("usuarios", JSON.stringify(usuarios));
        document.getElementById("datos").innerHTML =
          plantillas.pintarUserJSON(usuarios);
        plantillas.limpiar(document.getElementById("formulario"));
      },
      false
    );

    // Borrar un objeto JSON.
    document.addEventListener(
      "click",
      (e) => {
        if (e.target.classList.contains("borrar")) {
          if (confirm("¿Desea borrar este registro?")) {
            usuarios.splice(e.target.id, 1);
            document.getElementById("datos").innerHTML =
              plantillas.pintarUserJSON(usuarios);
          }
        }
      },
      false
    );

    // Si no se dispone de esta tecnología.
  } else {
    console.error("Este navegador no soporta la tecnología localStorage.");
  }
}; // Fin window.load.
