"use strict";

//Funcion dibujar que llama a la función lína para escribir su resultado dependiendo del tipo de línea que hay que hacer
function dibujar(num,cen){
    for (var i=0;i<num;i++){
        if (i<cen || i>cen*2-1){
            console.log(`${i+1}: ${linea(2,num)}`);   //$i está para evitar que firefox agrupe las líneas en vez de mostrarlas todas
        } else {
            console.log(`${i+1}: ${linea(1,num,cen)}`);
        }
    }
}

//Función línea que devuelve una línea de texto dependiendo de los parámetros que se le pasen
function linea(tipo,len,cen){
    var lin="";
    if (tipo==1){
        for (var i=0;i<len;i++){
            if (i<cen || i>cen*2-1){
                lin+="#";
            } else {
                lin+="·";
            }
        }
        return lin;
    } else if (tipo==2){
        for (var i=0;i<len;i++){
            lin+="#";
        }
        return lin;
    } else {
        return "ERROR";
    }
}

dibujar(27,9);