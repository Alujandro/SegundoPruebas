"use strict";
import {Agenda} from "./agenda";

window.onload = () => {
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    var agen=new Agenda;


















    function listenersBase(){
        //Crea los event listener de todos los elementos básicos de la página web.
        document.getElementById("guardar").addEventListener('click', function (evento){ agen.aniadir() });
        document.getElementById("buscar").addEventListener('click', function (evento){ agen.buscar() });
        document.getElementById("listar").addEventListener('click', function (evento){ agen.listar() });
        document.getElementById("ordenar").addEventListener('click', function (evento){ agen.ordenar() });
    }
} else {
    // Sorry! No Web Storage support..
}
}