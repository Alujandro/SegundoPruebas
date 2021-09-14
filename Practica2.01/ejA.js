"use strict";
//Declaración de variables de Juan
var masJuan= 50;
var altJuan= 138;
//Cálculo IMC de Juan y guardado en variable
var imcJuan= masJuan/(altJuan*altJuan);
//Declaración de variables de Marcos
var masMarcos= 60;
var altMarcos= 170;
//Cálculo IMC de Marcos y guardado en variable
var imcMarcos= masMarcos/(altMarcos*altMarcos);

//Salida por consola del mensaje comparando IMC
console.log("¿Tiene Marcos un IMC mayor que Juan? "+imcMarcos>imcJuan);