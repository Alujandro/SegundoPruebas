"use strict";

//Función para añadir el contenido del textbox a pendientes
function aniadir(){
    var tarea=document.getElementById("tareas").firstChild.nextSibling.value;//Guarda el texto del textbox en una variable
    document.getElementById("tareas").firstChild.nextSibling.value="";//Vacía el textbox
    if (tarea===""){    //Si el textbox extá vacío muestra un error
        console.log("Vacío");
    } else {    //Si no está vacío ejecuta la función más pendiente
        masPendiente(tarea);
    }
}

//Función para convertir un texto en una tarea completa dentro de pendientes
function masPendiente(elem){
    var elemento=document.createElement("div"); //Creamos el div
    elemento.setAttribute("class","tarea"); //Le añadimos el class="pendiente"
    //Y luego rellenamos el div con todo lo que necesita, el texto y los botones con sus acciones
    elemento.innerHTML='<p>'+elem+'</p><p class="botones"><input type="button" value="Borrar" class="del" onclick="borrar(this)"/> <input type="button" value="Acabar" class="end" onclick="acabar(this)"/></p>';
    document.getElementById("pendientes").appendChild(elemento);    //Esto mete el array
}

//Función para borrar el elemento que contiene al elemento que se le pasa
function borrar(elem){
    elem.parentElement.parentElement.remove(); //Tiene dos parentElement porque con uno simplemente desaparecen los botones
}

function acabar(elem){
    var elemento=elem.parentElement.parentElement.firstChild; //Guardamos el elemento p que tiene el mensaje
    //Línea para append en el div de acabadas
    console.log(elemento.innerHTML)
    borrar(elem);
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

elem.onclick=function (){ aniadir() };  //Acción al pulsar el botón añadir
elem2.onclick=function (){ mostrar() }; //Acción al pulsar el botón mostrar