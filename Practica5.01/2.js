"use strict";
window.onload = function () {   //Necesario




function color(){
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]; //Array de caracteres
    var col="#";    //Variable a la que se van a añadir los caracteres aleatorios
    for (var i=0; i<6; i++){    //Bucle para rellenar el código de color
        col+=letras[Math.floor(Math.random() * 16)];    //Elección aleatoria dentro del array de caracteres
    }
    return col; //Devuelve una variable con un contenido tipo #FFFFFF
}


window.ondblclick=function (){
    document.getElementsByTagName("html")[0].style.backgroundColor=color(); //Al hacer doble click, cambia el color de fondo del HTML por el valor de color()
};




}