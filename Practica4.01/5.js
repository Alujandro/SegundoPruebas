"use strict";

function insertAfter(nuevo, viejo){
    var elem=viejo;    //Guardamos el elemento como elem para tener una variable inicializada
    if (elem.nextSibling!=null){  //Comprueba que el elemento siguiente al que se le pasa existe
        elem=elem.nextSibling;                          //Guardamos el nextSibling, porque ya sabemos que existe
        elem.parentNode.insertBefore(nuevo, elem);      //Y hacemos un insertBefore al elemento que ya hemos guardado
    } else {
        document.getElementById(viejo).parentNode.append(nuevo);    //Si no hay siguiente elemento, le hacemos append al padre y ya está.
    }
}

var elemento = document.createElement("p"); //Creo el elemento de la lista
elemento.innerHTML = "Texto nuevo";         //Y luego le añado el texto al elemento
var elemento2 = document.getElementById("primero"); //Ahora guardamos el elemento que vamos a tomar de referencia
insertAfter(elemento,elemento2);