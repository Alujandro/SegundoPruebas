"use strict";

var pintura="white";
var pintando=false;

//Esta función es para cambiar el estado de pintando entre verdadero o falso, eso significa que cuando el ratón pase por las celdas pintará o no
function pintarOnOf(){
    if (pintando==true){
        pintando=false;
    } else {
        pintando=true;
    }
}

//Esta función es la encargada de hacer que los "píxeles" vuelvan a ser todos de color blanco y el mensaje vuelva a ser el mensaje por defecto
function reinicio (){
    var cambio=document.getElementsByClassName("pixel");    //Esto guarda un array con todos los elementos pixel, que son las celdas que se pueden pintar
    for (var i=0; i<cambio.length; i++){    //Recorremos el array de píxeles, que ha sido llamado cambio y le cambiamos el color de fondo a blanco
        cambio[i].style.backgroundColor="#FFFFFF";
    }
    document.getElementById("salida").innerHTML="Elige un color";   //Cambiamos el mensaje que sea que tenía la celda salida por Elige un color
    pintura="white";                                                //Y luego dejamos el color de la pintura seleccionado en blanco
}

//Esta función genera la tabla de píxeles
function haceTabla (){
    var tabla=document.getElementById("lienzo");    //Guardamos el elemento lienzo, que es una tabla en una variable
    for (var i=0; i<30; i++){   //Filas
        let fila=document.createElement("tr");      //Le añadimos treinta filas
        let columnas="";
        for (var j=0; j<60; j++){   //Columnas
            columnas+=`<td onclick="pintar(this,true)" onmouseover="pintar(this,false)" class="pixel"></td>`;   //A cada fila le añadimos treinta celdas de clas pixel con atributos onclick y onmouseover que ejecutan la función pintar
        }
        fila.innerHTML=columnas;    //Aquí unimos los pixeles, que están en la variable columnas a cada fila
        tabla.appendChild(fila);    //Aquí añadimos realmente las filas a la tabla
    }

}

//Esta función se encarga de pintar las celdas, la variable val es para indicar si se está haciendo clic o está en un hover
function pintar(elemento,val){
    if (val){
        pintarOnOf();   //Si se hace clic cambiará el estado de pintando, que es para saber si se tiene que pintar en un onmouseover
    }
    if (pintando){
        elemento.style.backgroundColor=pintura; //Si se está pintando, pintará el elemento al pasar el ratón por encima
    }
}

//Esta función cambia el color con el que se pinta y después cambia el mensaje de salida para indicar el color seleccionado
function color(elemento){
    pintura=elemento.getAttribute("class");
    if (pintura=="red"){
        document.getElementById("salida").innerHTML="Has elegido el color rojo";
    } else if (pintura=="green"){
        document.getElementById("salida").innerHTML="Has elegido el color verde";
    } else if (pintura=="blue"){
        document.getElementById("salida").innerHTML="Has elegido el color azul";
    } else if (pintura=="yellow"){
        document.getElementById("salida").innerHTML="Has elegido el color amarillo";
    } else if (pintura=="cyan"){
        document.getElementById("salida").innerHTML="Has elegido el color cian";
    } else if (pintura=="white"){
        document.getElementById("salida").innerHTML="Has elegido el color blanco";
    } else {
        return false;
    }
}

haceTabla();