"use strict";
function sumamiento(){  //Declaración de la función suma
    var total=0;
    if (arguments.length<2){    //Comparación de cantidad de parámetros introducidos
        return "ERROR GARRAFAL: Parámetros insuficientes";
    } else {
        for (var i=0; i<arguments.length; i++){     //Bucle que recorre los parámetros introducidos
            if (typeof arguments[i] != typeof 1){   //Comprobación de tipo de parámetro
                return `ERROR GARRAFAL: El parámetro ${i} no es un número`;
            } else {
                total=arguments[i]+total;   //Suma de parámetros
            }
        }
        return total;
    }
}

console.log(sumamiento(1,2,3,4,5,6,7,8,9));