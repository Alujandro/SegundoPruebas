"use strict";

function aniadir(){
    console.log("S'haniadio");
    document.getElementById("tareas").firstChild.nextSibling.value="";//Vacía el textbox
}

function borrar(elem){
    elem.remove();
}

function acabar(elem){
    //Línea para append en el div de acabadas
    elem.remove();
}

function ocultar(){
    //Línea para cambiar el atributo display="hidden";
}

function mostrar(){
    //Línea para cambiar el atributo display por el que lo muestra, que no recuerdo cual era
    console.log("Que se muestra")
}

var elem=document.getElementById("add");
var elem2=document.getElementById("sho");

elem.onclick=function (){ aniadir() };
elem2.onclick=function (){ mostrar() };