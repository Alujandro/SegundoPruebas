"use strict";
import * as request from "./request.js";
import * as categorias from "./categorias.js";

//Obtiene las preguntas
export function preguntas(){
    let can=categorias.cantidad();
    let cat=categorias.categoria();
    console.log("Click");
    request.lisPregunta(can, cat);
    //Ver que poner
}

//A partir de aquí deberían añadirse las funciones que escriben las preguntas y te permiten marcarlas/comprobar si son correctas
export function muestraPreguntas(arr){
    for (let i=0; i<arr.results.length; i++){
        let onj=console.log(arr.results[i]); //Esto es el objeto completo con todos sus elementos
        //Aquí se enseña por pantalla el objeto con todos sus elementos
    }
}