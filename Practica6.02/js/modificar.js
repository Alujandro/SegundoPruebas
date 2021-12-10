"use strict";
import * as mover from "./mover.js";
//Función para borrar el elemento que contiene al elemento que se le pasa.
export function borrar(elem){
    elem.parentElement.parentElement.remove(); //Tiene dos parentElement porque con uno simplemente desaparecen los botones.
}

//Función para meter una tarea pendiente a una acabada
export function acabar(elem){
    var elemento=elem.parentElement.parentElement.firstChild; //Guardamos el elemento p que tiene el mensaje.
    //Ejecutamos la función masAcabada para crear una tarea acabada con el texto del elemento.
    mover.masAcabada(elemento.innerHTML); //Prefiero separar esto en dos partes para aclararme.
    borrar(elem);   //Luego eliminamos el antiguo elemento.
}

//Función para ocultar la tarea acabada.
export function archivar(elem){
    //Línea para cambiar el atributo display="hidden";
    elem.parentElement.parentElement.style.display="none";
}

//Función para mostrar todas las tareas
export function mostrar(){
    //Primero hacemos un array con todos los elementos de clase acabada.
    var amostrar=document.getElementsByClassName("acabada");
    //Y a cada elemento le cambiamos el display por inherit para volver a verlos, es mucho más fácil cambiarlos todos que ir comprobando si no son visibles uno por uno.
    for (var i=0; i<amostrar.length; i++){
        amostrar[i].style.display="inherit";
    }
}

//Función para meter una tarea acabada a una pendiente.
export function volver(elem){
    //Funciona exactamente igual que la función acabar, pero en vez de llamar a masAcabada, llama a masPendiente para crear una tarea pendiente.
    var elemento=elem.parentElement.parentElement.firstChild;
    mover.masPendiente(elemento.innerHTML);
    borrar(elem);
}