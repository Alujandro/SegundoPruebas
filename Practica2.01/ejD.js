"use strict";
//Declaración de variables
var nomprod="anvorguesa";
var precio=15;
var impuesto=21;

//If para comprobación de errores
if (typeof precio==typeof impuesto && typeof impuesto==typeof 1){
    //Uso de la función
    calcular(nomprod,precio,impuesto);
} else {
    //Salida de error
    console.log("ERROR: NaN");
}

//Creación de la función
function calcular(pro,pre,imp){
    console.log(pro+" "+pre*(1+imp/100)+"€"); //La fórmula pre*(1+imp/100) es para calcular el coste con impuestos
}