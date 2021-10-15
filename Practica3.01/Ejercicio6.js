"use strict";

function palindomoPrimos(){
    var array=[];   //Array para guardar los valores
    var posarr=0;   //Variable para manejar las posiciones del array
    for (var i=2; i<100000; i++){   //Recorre todos los valores
        let noPrimo=false;          //Para saber si es primo
        for (var j=2; j<i; j++){    //Comprueba si son primos
            if (i%j==0){        //Si no es primo continúa con el siguiente número
                noPrimo=true;
                break;
            }
        }
        if (!noPrimo){
            let primo=i.toString();     //Convierto el número a string para poder manejarlo
            let noPalindromo=false;     //Para saber si deja de ser palíndromo
            for (var k=0; k<primo.length; k++){
                let fin=primo.length-k-1;     //Guardamos la posición opuesta a k para luego hacer la combrobación
                if (primo.charAt(k)!=primo.charAt(fin)){
                    noPalindromo=true;      //Si no son palíndromos se indica
                }
            }
            if (!noPalindromo){     //Si son palíndromos se guardan en el array en la posición posarr
                array[posarr]=i;
                posarr++;
            }
        }
    }
    return array;
}


var resultados=palindomoPrimos();
console.log(resultados.toString());