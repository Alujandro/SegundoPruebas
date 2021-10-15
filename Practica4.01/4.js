"use strict";

function toCani(cad){
    var comp=document.getElementById(cad).innerHTML
    var temp="";    //Creación de variable para devolver el resultado
    for (var i=0; i<comp.length; i++){   //Bucle para recorrer el mensaje de entrada
        if (i%2==0){                            //Si la letra se encuentra en una posición par se ejecutará la siguiente línea
            temp+=comp.charAt(i).toUpperCase();  //Que guardará la letra en la variable temp como una letra en mayúscula
        } else {
            temp+=comp.charAt(i);                //Si la letra está en posición par se guardará la letra como está en la variable temp
        }
    }
    temp+="HHH";    //Tras el bucle se añadirán las letras HHH al final del mensaje
    document.getElementById(cad).innerHTML=temp;
}

function aniadir(){

    //<td id="fila1">Ejemplo de contenido</td>
    //<td><button onclick="toCani('fila1')">Caniar</button></td>
}