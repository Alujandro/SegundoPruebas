"use strict";

function uno(elemento){
    setTimeout(function(){ elemento.style.visibility="hidden"; }, 250); //Hacemos un setTimeout para evitar que se esconda el elemento durante 250ms (una cantidad de tiempo que me parece muy razonable para hacer doble click)
}

function dos(elemento){
    elemento.style.display="none";  //Esto esconde el elemento de forma "permanente" al hacer doble clic
}

function reaparecer(){
    var divs=document.querySelectorAll("div");  //Primero guardamos un array de todos los divs (Que son todos los elementos a esconder)
    for (var i=0; i<divs.length; i++){
        divs[i].style.visibility="visible"; //Luego los recorremos todos y les cambiamos la visibilidad a visible, lo cual no interfiere con display.
    }
}