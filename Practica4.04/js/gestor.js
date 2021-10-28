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
    elemento.setAttribute("class","tarea"); //Le añadimos el class="tarea"
    //Y luego rellenamos el div con todo lo que necesita, el texto y los botones con sus acciones
    elemento.innerHTML='<p>'+elem+'</p><p class="botones"><input type="button" value="Borrar" class="del" onclick="borrar(this)"/> <input type="button" value="Acabar" class="end" onclick="acabar(this)"/></p>';
    document.getElementById("pendientes").appendChild(elemento);    //Esto mete el div
}

//Función para crear una tarea acabada
function masAcabada(elem){
    var elemento=document.createElement("div"); //Creamos el div
    elemento.setAttribute("class","acabada"); //Le añadimos el class="acabada"
    //Y luego rellenamos el div con todo lo que necesita, el texto y los botones con sus acciones
    elemento.innerHTML='<p>'+elem+'</p><p class="botones"><input type="button" value="Archivar" class="del" onclick="archivar(this)"/> <input type="button" value="Volver" class="end" onclick="volver(this)"/></p>';
    document.getElementById("acabadas").appendChild(elemento);    //Esto mete el div
}

//Función para borrar el elemento que contiene al elemento que se le pasa
function borrar(elem){
    elem.parentElement.parentElement.remove(); //Tiene dos parentElement porque con uno simplemente desaparecen los botones
}

//Función para meter una tarea acabada a una pendiente
function volver(elem){
    //Funciona exactamente que la función acabar, pero en vez de llamar a masAcabada, llama a masPendiente para crear una tarea pendiente
    var elemento=elem.parentElement.parentElement.firstChild;
    masPendiente(elemento.innerHTML);
    borrar(elem);
}

//Función para meter una tarea pendiente a una acabada
function acabar(elem){
    var elemento=elem.parentElement.parentElement.firstChild; //Guardamos el elemento p que tiene el mensaje
    //Ejecutamos la función masAcabada para crear una tarea acabada con el texto del elemento
    masAcabada(elemento.innerHTML); //Prefiero separar esto en dos partes para aclararme
    borrar(elem);   //Luego eliminamos el antiguo elemento
}

//Función para ocultar la tarea acabada
function archivar(elem){
    //Línea para cambiar el atributo display="hidden";
    elem.parentElement.parentElement.style.display="none";
}

//Función para mostrar todas las tareas
function mostrar(){
    //Primero hacemos un array con todos los elementos de clase acabada
    var amostrar=document.getElementsByClassName("acabada");
    //Y a cada elemento le cambiamos el display por inherit para volver a verlos, es mucho más fácil cambiarlos todos que ir comprobando si no son visibles uno por uno
    for (var i=0; i<amostrar.length; i++){
        amostrar[i].style.display="inherit";
    }
}

var elem=document.getElementById("add");    //Guardamos el elemento add
var elem2=document.getElementById("sho");   //Guardamos el elemento sho

elem.onclick=function (){ aniadir() };  //Acción al pulsar el botón añadir
elem2.onclick=function (){ mostrar() }; //Acción al pulsar el botón mostrar