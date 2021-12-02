"use strict";
import * as modificar from "./modificar.js";
import * as mover from "./mover.js";

//Eventos para arrastrar una tarea
var aarrastrar; //Variable para guardar el elemento que vamos a arrastrar.

//Acción al empezar a arrastrar
document.addEventListener(
    "dragstart",
    function (evento) {
        aarrastrar = evento.target; //Guardamos todo el elemento en aarrastrar.
    },
    false
);

//Acción al pasar por encima
document.addEventListener(
    "dragover",
    function (evento) {
        evento.preventDefault(); //Previene el comportamiento por defecto.
    },
    false
);

//Acción al soltar el elemento
document.addEventListener(
    "drop",
    function (evento) {
        evento.preventDefault(); //Previene el funcionamiento por defecto.
        //Si se suelta sobre el recuadro de acabadas o (en principio) sobre una tarea acabada añade el elemento arrastrado al final de la lista.
        if (evento.target.id=="acabadas" || evento.target.className=="acabada") {  
            if (aarrastrar.className=="tarea"){
                modificar.acabar(aarrastrar.firstChild.firstChild);   //Pongo firstChild.firstChild porque inicialmente la función estaba diseñada a partir de un botón y no del div.
            } else {
                console.log("No se puede arrastrar al mismo sitio"); //Mensaje de error por consola no necesario.
            }
        }
        //Si se suelta sobre el recuadro de pendientes o (en principio) sobre una tarea pendiente añade el elemento arrastrado al final de la lista.
        if (evento.target.id=="pendientes" || evento.target.className=="tarea"){
            if (aarrastrar.className=="acabada"){
                modificar.volver(aarrastrar.firstChild.firstChild);   //Pongo firstChild.firstChild porque inicialmente la función estaba diseñada a partir de un botón y no del div.
            } else {
                console.log("No se puede arrastrar al mismo sitio"); //Mensaje de error por consola no necesario.
            }
        }
    },
    false
);


export function programa(){
    var elem=document.getElementById("add");    //Guardamos el elemento add.
    var elem2=document.getElementById("sho");   //Guardamos el elemento sho.

    elem.onclick=function (){ mover.aniadir() };  //Acción al pulsar el botón añadir.
    elem2.onclick=function (){ modificar.mostrar() }; //Acción al pulsar el botón mostrar.
}