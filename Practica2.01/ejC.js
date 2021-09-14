"use strict";
//Declaración de variables
var uno=5;
var dos=3;
var i;
//Llamada a la función
ejC(uno,dos);

//Declaración de la función
function ejC(primero, segundo){
    for(i=primero; i>0; i--){ //For para repetir la multiplicación y escritura del número
        console.log(segundo);
        segundo*=2;
    }
};