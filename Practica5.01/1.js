"use strict";
window.onload = function () {


var salir=false; //Variable para saber cuando se va a salir.

//Esta función inicia el interval
function comenzar(){
    salir=false;

    var x=setInterval(function(){   //He iniciado un interval que se ejecuta cada 2000 milisegundos
        if (salir){ //Si salir es true, el intervalo parará.
            clearInterval(x);
        }
        var ache=document.createElement("h1");  //Creamos el h1
        ache.innerHTML="Hola feo";              //Le añadimos el texto
        document.getElementsByTagName("html")[0].appendChild(ache); //Metemos el h1 dentro de la página web
    }, 2000);
}

//Esta función hace que pare
function parar(){
    salir=true;
}

var elem=document.getElementById("com");    //Guardamos el elemento com
var elem2=document.getElementById("par");   //Guardamos el elemento par

elem.onclick=function (){ comenzar() }; //Acción al pulsar el botón Comenzar Saludos
elem2.onclick=function (){ parar() };   //Acción al pulsar el botón Parar Saludos

}