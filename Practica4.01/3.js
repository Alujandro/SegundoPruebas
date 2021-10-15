"use strict";

function temporizador(min,seg){
    if (typeof min!=typeof 1 || !(typeof seg==typeof 1 || seg===undefined)){    //Comprobación de valores de entrada, si no es numérico o hay menos de 1 sale error
        document.getElementById("salida").innerHTML = "Valor de entrada inválido";
        //console.log("Valor de entrada inválido");
        return false; //Finalización de programa
    }

    if (seg===undefined){   //Si sólo hay un valor guarda el único valor numérico introducido como segundos
        seg=min;
        min=0;
    }

    if (seg>59){   //Comprobación si se ha introducido una cantidad de segundos ilógica
        document.getElementById("salida").innerHTML = "Valor de entrada inválido";
        //console.log("Valor de entrada inválido");
        return false; //Fin de función
    }

    var x=setInterval(function(){   //He iniciado un interval que se ejecuta cada 1000 milisegundos
        if (document.getElementById('boton').value=="Iniciar"){ //Si el texto del botón es Iniciar, se para el intervalo
            clearInterval(x);
        }
        if (seg<10){    //Si segundos es menor a 10 se escribirá con un formato acorde a la cantidad de segundos
            document.getElementById("salida").innerHTML = min+":0"+seg;
        } else {
            document.getElementById("salida").innerHTML = min+":"+seg;
        }
        
        if (seg==0){    //Comprobación de cantidad de segundos
            if (min==0){    //Si no quedan minutos ni segundos se finaliza el intervalo
                document.getElementById("salida").innerHTML = "FIN";
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

function entrada(){
    var min=parseInt(document.getElementById('minutos').value); //Obtenemos el valor a Int de minutos porque se obtiene como string
    var seg=parseInt(document.getElementById('segundos').value);//Obtenemos el valor a Int de segundos porque se obtiene como string

    if (document.getElementById('boton').value=="Parar"){   //Comprobamos el valor del botón para evitar que hayan múltiples temporizadores funcionando a la vez
        document.getElementById('boton').value="Iniciar";
    } else {
        document.getElementById('boton').value="Parar";
    }

    temporizador(min,seg);  //Iniciamos la función temporizador que es una versión ligeramente modificada de un ejercicio anterior
}