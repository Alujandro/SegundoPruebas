"use strict";
import * as modificar from "./modificar.js";
import * as mensaje from "./mensaje.js";

//Función para añadir el contenido del textbox a pendientes.
export function aniadir(){
    var tarea=document.getElementById("tareas").firstChild.nextSibling.value;//Guarda el texto del textbox en una variable.
    document.getElementById("tareas").firstChild.nextSibling.value="";//Vacía el textbox.
    if (tarea===""){    //Si el textbox está vacío muestra un error.
        if (document.getElementById("error")!=null){    //Comprobamos si existe el elemento error.
            document.getElementById("error").remove();  //Si existe lo borra para evitar que aparezca múltiples veces.
        }
        mensaje.mensaje();  //Muestra el mensaje.
    } else {    //Si no está vacío ejecuta la función masPendiente.
        if (document.getElementById("error")!=null){    //Si hay un elemento error lo borra.
            document.getElementById("error").remove();
        }
        masPendiente(tarea);
    }
}

//Función para convertir un texto en una tarea completa dentro de pendientes.
export function masPendiente(elem){
    var elemento=document.createElement("div"); //Creamos el div.
    elemento.setAttribute("class","tarea"); //Le añadimos el class="tarea".
    elemento.setAttribute("draggable","true");  //Para permitir que el elemento sea arrastrable.
    //Y luego rellenamos el div con todo lo que necesita, el texto y los botones con sus acciones.
    elemento.innerHTML='<p>'+elem+'</p><p class="botones"><input type="button" value="Borrar" class="del"/> <input type="button" value="Acabar" class="end"/></p>';
    document.getElementById("pendientes").appendChild(elemento);    //Esto mete el div.
    nuevoEnd();
}

//Función para crear una tarea acabada.
export function masAcabada(elem){
    var elemento=document.createElement("div"); //Creamos el div.
    elemento.setAttribute("class","acabada"); //Le añadimos el class="acabada".
    elemento.setAttribute("draggable","true");  //Para permitir que el elemento sea arrastrable.
    //Y luego rellenamos el div con todo lo que necesita, el texto y los botones con sus acciones.
    elemento.innerHTML='<p>'+elem+'</p><p class="botones"><input type="button" value="Archivar" class="arc"/> <input type="button" value="Volver" class="vol"/></p>';
    document.getElementById("acabadas").appendChild(elemento);    //Esto mete el div.
    nuevoArc();
}

//Crea los event listener de los botones acabar y borrar de las tareas pendientes.
export function nuevoEnd(){
    let acabo=document.getElementsByClassName("end"); //Guardamos los elementos con class end.
    let bor=document.getElementsByClassName("del"); //Guardamos los elementos con class del.
    for (let i=0; i<acabo.length; i++){
        acabo[i].addEventListener('click', function (evento){ modificar.acabar(evento.target)});
        bor[i].addEventListener('click', function (evento) { modificar.borrar(evento.target) });
    }
}
//Crea los event listener de los botones archivar y volver de las tareas acabadas.
export function nuevoArc(){
    let archivo=document.getElementsByClassName("arc"); //Guardamos los elementos con class arc.
    let vuel=document.getElementsByClassName("vol"); //Guardamos todos los elementos con class vol.
    for (let i=0; i<archivo.length; i++){
        archivo[i].addEventListener('click', function (evento){ modificar.archivar(evento.target)});
        vuel[i].addEventListener('click', function (evento) { modificar.volver(evento.target) });
    }
}

