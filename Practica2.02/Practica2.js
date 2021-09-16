"use strict";

function multiplicar(){
    for (var i=10; i>0; i--){   //Bucle de líneas de tabla de multiplicar
        console.log(`${arguments[0]} * ${i} = ${arguments[0]*[i]}`);    //Impresión de las tablas de multiplicar.
    }
}

function tablas(){
    for (var i=arguments[0]; i>1 ; i--){    //Bucle de ejecución de tablas de multiplicar
        console.log(`Tabla del ${i}`);
        multiplicar(i);
    }
}

tablas(5,multiplicar);