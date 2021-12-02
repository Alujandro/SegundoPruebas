"use strict";

//Esta función genera un mensaje y lo muestra.
export function mensaje(){
    var mensaje = document.createElement("p");
    mensaje.innerHTML ="Por favor, introduzca un texto antes de pusar añadir";
    mensaje.id="error";
    document.getElementById("tareas").appendChild(mensaje);
}