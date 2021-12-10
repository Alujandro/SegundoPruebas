"use strict";

export function listeners(func){
    //Crea los event listener del botón Comenzar
    let cliqueo=document.getElementById("iniciar");
    cliqueo.addEventListener('click', function (evento){ func() }); //Recibimos la función que se va a ejecutar al hacer clic
}
