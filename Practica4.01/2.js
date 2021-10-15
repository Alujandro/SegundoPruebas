"use strict";

function aniadir(){
    var mensaje = document.createElement("li");  //Creo el elemento de la lista
    var num=Math.floor(Math.random()*10);   //Genera el número aleatorio
    mensaje.innerHTML = num;
    mensaje.setAttribute("class", "info");  //Añado atributos por si acaso aunque no sea necesario
    document.getElementById("lista").appendChild(mensaje);   //Introduzco el mensaje dentro de info, que es un div
}