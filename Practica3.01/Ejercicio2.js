"use strict";


function temporizador(min,seg){
    if (typeof min!=typeof 1 || !(typeof seg==typeof 1 || seg===undefined)){    //Comprobación de valores de entrada, si no es numérico o hay menos de 1 sale error
        console.log("Valor de entrada inválido");
        return false; //Finalización de programa
    }

    if (seg===undefined){   //Si sólo hay un valor guarda el único valor numérico introducido como segundos
        seg=min;
        min=0;
    }

    if (seg>59){   //Comprobación si se ha introducido una cantidad de segundos ilógica
        console.log("Valor de entrada inválido");
        return false; //Fin de función
    }


    var x=setInterval(function(){   //He iniciado un interval que se ejecuta cada 1000 milisegundos
        if (seg<10){    //Si segundos es menor a 10 se escribirá con un formato acorde a la cantidad de segundos
            console.log(min+":0"+seg);
        } else {
            console.log(min+":"+seg);
        }
        
        if (seg==0){    //Comprobación de cantidad de segundos
            if (min==0){    //Si no quedan minutos ni segundos se finaliza el intervalo
                console.log("FIN");
                clearInterval(x);
            } else {    //Si quedan minutos, se reduce la cuenta de minutos en 1 y se añade 59 a segundos
                min--;
                seg=59;
            }
        } else {
            seg--;
        }
    }, 1000);
    return true;    //Fin de función
}

temporizador(1,2);