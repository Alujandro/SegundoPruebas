"use strict";

var pintura="#FFFFFF";

function reinicio (){
    var cambio=document.getElementsByClassName("pixel");
    for (var i=0; i<cambio.length; i++){
        cambio[i].style.backgroundColor="#FFFFFF";
    }
}

function haceTabla (){
    var tabla=document.getElementById("lienzo");
    for (var i=0; i<30; i++){   //Filas
        let fila=document.createElement("tr");
        let columnas="";
        for (var j=0; j<60; j++){   //Columnas
            columnas+=`<td onclick="pintar(this)" class="pixel"></td>`;
        }
        fila.innerHTML=columnas;
        tabla.appendChild(fila);
    }

}

function pintar(elemento){
    elemento.style.backgroundColor=pintura;
}

function color(elemento){
    pintura=elemento.getAttribute("class");
}

haceTabla();