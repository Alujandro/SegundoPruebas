"use strict";

var cuenta=1;   //Creamos una variable para guardar las posiciones del array (en 1 para que la primera imagen no esté 4 segundos)
var imagenes = ["img/tres.png", "img/tinkiwinki.png", "img/luca.png", "img/jeje.png"];  //Creamos el array con las direcciones de las imágenes
var intervalo = setInterval(function() { cambiaImagen(); }, 2000);  //Creamos un intervalo que ejecute una función cada 2 segundos

function cambiaImagen(){    //Creamos la función que se va a repetir
    document.getElementById("salida").src=imagenes[cuenta]; //Cambiamos la dirección de la imagen por la de la posición del array
    cuenta++;   //Incrementamos la posición
    if (cuenta>imagenes.length-1){
        cuenta=0;   //Si la posición resulta ser mayor que la longitud del array de imágenes, la cambiamos a 0 para que vuelva a empezar
    }
}