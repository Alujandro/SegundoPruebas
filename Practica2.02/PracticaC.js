"use strict";

//Declaración de arrays
var vector1= new Array; 
var vector2= new Array;
var vector3= new Array;

//Función para rellenar los arrays
function llenar(){
    for (var i=0; i<100; i++){  //Bucle para recorrer los arrays
        vector1[i]=Math.floor(Math.random()*101);
        vector2[i]=Math.floor(Math.random()*101);
    }
}

//Función para sumar los arrays
function suma(){
    for (var i=0; i<vector1.length; i++){   //Bucle para recorrer los arrays
        vector3[i]=vector1[i]+vector2[vector2.length-1-i];  //Formula para sumar los números en la posición i del primer vector con los números del final del segundo vector
    }
}

//Función para imprimir los arrays, he optado por no hacer un bucle para cada uno
function impresion(){
    console.log("Primer vector");
    console.log(vector1);
    console.log("Segundo vector");
    console.log(vector2);
    console.log("Suma de vectores");
    console.log(vector3);
}

//Función que inicia las otras tres funciones
function calcular(func1,func2,func3){
    func1();
    func2();
    func3();
}

calcular(llenar,suma,impresion);