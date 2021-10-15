"use strict";
var cadena="una cadena cani es como esta";

function toCani(cad){
    var temp="";    //Creación de variable para devolver el resultado
    for (var i=0; i<cad.length; i++){   //Bucle para recorrer el mensaje de entrada
        if (i%2==0){                            //Si la letra se encuentra en una posición par se ejecutará la siguiente línea
            temp+=cad.charAt(i).toUpperCase();  //Que guardará la letra en la variable temp como una letra en mayúscula
        } else {
            temp+=cad.charAt(i);                //Si la letra está en posición par se guardará la letra como está en la variable temp
        }
    }
    temp+="HHH";    //Tras el bucle se añadirán las letras HHH al final del mensaje
    return temp;
}

console.log(cadena);

console.log(toCani(cadena));