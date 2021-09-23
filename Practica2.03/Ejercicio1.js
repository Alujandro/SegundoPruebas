"use strict";

//Funcion dibujar que llama a la función lína para escribir su resultado dependiendo del tipo de línea que hay que hacer
function dibujar(num){
    for (var i=0;i<num;i++){
        if (i<(num/3) || i>num-1-num/3){
            console.log(`${i+1}: ${linea(1,num)}`);   //$i está para evitar que firefox agrupe las líneas en vez de mostrarlas todas
        } else {
            console.log(`${i+1}: ${linea(2,num)}`);
        }
    }
}

//Función línea que devuelve una línea de texto dependiendo de los parámetros que se le pasen
function linea(tipo,len){
    var lin="";
    if (tipo==1){
        for (var i=0;i<len;i++){
            if (i<len/3 || i>(len-1)-len/3){
                lin+="#";
            } else {
                lin+="·";
            }
        }
        return lin;
    } else if (tipo==2){
        for (var i=0;i<len;i++){
            lin+="·";
        }
        return lin;
    } else {
        return "ERROR";
    }
}

dibujar(27);