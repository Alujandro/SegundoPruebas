"use strict";
function modulo(car){    //Función para identificar la letra
    switch (car){
        case "T": return 0;
        case "R": return 1;
        case "W": return 2;
        case "A": return 3;
        case "G": return 4;
        case "M": return 5;
        case "Y": return 6;
        case "F": return 7;
        case "P": return 8;
        case "D": return 9;
        case "X": return 10;
        case "B": return 11;
        case "N": return 12;
        case "J": return 13;
        case "Z": return 14;
        case "S": return 15;
        case "Q": return 16;
        case "V": return 17;
        case "H": return 18;
        case "L": return 19;
        case "C": return 20;
        case "K": return 21;
        case "E": return 22;
        default: return null;   //Por si se introduce un símbolo incompatible
    }
}

function cantidad(letra){
    var numero=modulo(letra);   //Guarda el valor de de la letra introducida
    var total=0;
    var resultado="";
    if (numero==null){  //Comprobación de número existente
        return total;
    } else {
        for (var i=1; i<999; i++){  //Bucle para recorrer todos los valores
            if ((i+48357000)%numero==0){    //Comprobación de si el número se corresponde a la letra
                if (total>0){   //Comprobación para el formato de las comas
                    resultado+=","; 
                }
                total++;
                resultado+=" "+(i+48357000);
            }
        }
    }
    console.log(resultado); //Escritura de los resultados
    return total;
}

cantidad("D");