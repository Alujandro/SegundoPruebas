"use strict";
function letra(num){    //Función para hacer la asignación de letra
    switch (num%23){
        case 0: return "T";
        case 1: return "R";
        case 2: return "W";
        case 3: return "A";
        case 4: return "G";
        case 5: return "M";
        case 6: return "Y";
        case 7: return "F";
        case 8: return "P";
        case 9: return "D";
        case 10: return "X";
        case 11: return "B";
        case 12: return "N";
        case 13: return "J";
        case 14: return "Z";
        case 15: return "S";
        case 16: return "Q";
        case 17: return "V";
        case 18: return "H";
        case 19: return "L";
        case 20: return "C";
        case 21: return "K";
        case 22: return "E";
    }
}

var salida=""; //Inicialización de la variable salida

var x=setInterval(function(){   //He iniciado el interval
    var entrada=prompt("Introduce DNI","12345678"); //Ejecución del prompt y asignación del valor introducido a la variable entrada
    
    if (entrada==-1){   //Comprobación del mensaje de salida
        console.log(salida);    //Escritura del mensaje de salida antes de parar el intervalo
        clearInterval(x);
    } else {
        if (salida.length==0){  //If para formato que guardará la letra en la variable salida.
            salida+=letra(entrada);
        } else {
            salida+=", "+letra(entrada);
        }
    }
    
}, 20000);