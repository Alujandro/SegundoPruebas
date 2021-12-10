"use strict";

//Obtiene la categoría que se ha indicado en la página web
export function categoria(){
    return document.getElementById("categoria").value;
}
//Obtiene la cantidad de preguntas que se ha indicado en la página web
export function cantidad(){
    return document.getElementById("cantidad").value;
}