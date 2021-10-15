"use strict";
//Podría hacer esto dentro de la función, pero no lo he hecho
var d=document; //Guardo document para usarlo usando una sola letra
var losParrafos=d.querySelectorAll("p");    //Guardo el array de parrafos
var numParrafos=losParrafos.length; //Guardo la longitud del array losParrafos para luego mostrarla
var segundoParr=losParrafos[1].innerHTML;   //Guardo el contenido del segundo párrafo para poder mostrarlo después
var losEnlaces=d.querySelectorAll("a"); //Guardo el array de enlaces
var numEnlaces=losEnlaces.length;   //Guardo la longitud del array de enlaces para mostrar la cantidad después
var primEnlace=losEnlaces[0].href;  //Guardo la dirección del primer enlace
var penEnlace=losEnlaces[losEnlaces.length-2].href; //Guardo la dirección del penúltimo enlace

function meteDiv() {
    var mensaje = document.createElement("p");  //Creo el elemento para guardar el mensaje y en la siguiente línea añado el mensaje al elemento mensaje
    mensaje.innerHTML = "<strong>Número de párrafos: </strong>"+numParrafos+"<br><br><strong>Contenido del segundo párrafo: </strong><br><q>"+segundoParr+"</q><br><br><strong>Cantidad de enlaces: </strong>"+numEnlaces+"<br><br><strong>Direción del primer enlace: </strong>"+primEnlace+"<br><br><strong>Dirección del penúltimo enlace: </strong>"+penEnlace;
    mensaje.setAttribute("class", "info");  //Añado atributos por si acaso aunque en este caso no sea necesario
    d.getElementById("info").appendChild(mensaje);   //Introduzco el mensaje dentro de info, que es un div
  }

  meteDiv();    //Ejecuto la función