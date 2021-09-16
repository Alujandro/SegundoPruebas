"use strict";
function sumamiento(){
    var total=0;
    for (var i=0; i<arguments.length; i++){
        
        if (arguments.length<2){
            return "ERROR GARRAFAL: Parámetros insuficientes";
        } else {
            if (typeof arguments[i] != typeof 1){
                return `ERROR GARRAFAL: El parámetro ${i} no es un número`;
            } else {
                total=arguments[i]+total;
            }
        }
    }
    return total;
}

console.log(sumamiento(1,2,3,4,5,6,7,8,9));