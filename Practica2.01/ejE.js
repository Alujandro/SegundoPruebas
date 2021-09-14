"use strict";
//Declaración de variables
var facturas=[124,48,268];
var propinas=[20,15,10];
var pagos=[];
var i;

//For para recorrer el array de facturas
for (i=0; i<facturas.length; i++){
    //Comprobación de facturas
    if (facturas[i]<50){
        pagos[i]=facturas[i]*(1+propinas[0]/100); //Se calcula y añade el precio de la factura total a pagos
    } else if (facturas[i]<=200){
        pagos[i]=facturas[i]*(1+propinas[1]/100); //Se calcula y añade el precio de la factura total a pagos
    } else if (facturas[i]>200) {
        pagos[i]=facturas[i]*(1+propinas[2]/100); //Se calcula y añade el precio de la factura total a pagos
    }
}

//For para imprimir los resultados
for (i=0; i<pagos.length; i++){
    console.log("Factura "+(i+1)+": "+pagos[i]+"$");
}