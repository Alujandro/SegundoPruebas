"use strict";

function listenersBase(){
    //Crea los event listener de todos los elementos básicos de la página web.
    document.getElementById("encontrar").addEventListener('click', function (evento){ muestraBusqueda(evento) });
}