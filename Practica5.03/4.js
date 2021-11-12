"use strict";

window.onload = function () {   //Necesario

//Función para el comportamiento general del programa
function pograma(){
    if (document.getElementById("pe1").value==""){  //Comprueba si los campos están vacíos
        error("Faltan campos por rellenar");
    } else if (document.getElementById("pe2").value==""){
        error("Faltan campos por rellenar");
    } else {
        error("");
        if (isAnagrama()){  //Ejecutamos la función que comprueba sin son anagramas
            mensaje("Son anagramas");
        } else {
            mensaje("No son anagramas");
        }
    }
}

function isAnagrama(){
    //Primero guardamos los valores como texto en minúsculas
    var palab1=document.getElementById("pe1").value.toLowerCase();
    var palab2=document.getElementById("pe2").value.toLowerCase();
    var comprobados=[];
    //Comprobamos si las dos palabras son la misma
    if (palab1==palab2){
        return false;
    }
    //Recorremos la primera palabra ignorando los espacios
    for (var i=0; i<palab1.length; i++){
        if (palab1.charAt(i)==" "){
            continue;
        }
        //Recorremos la segunda palabra y la comprobamos letra a letra con la letra en la posición i de la primera palabra
        for (var j=0; j<palab2.length; j++){
            if (palab2.charAt(j)==palab1.charAt(i)){
                if (comprobados.includes(j)){   //Si la posición se encuentra en el array de comprobados, nos saltamos el push, lo cual nos asegura que haya la misma cantidad de letras
                    continue;
                }
                comprobados.push(j);    //Por cada coincidencia, guardamos la posición en un array que hemos definido al principio
            }
        }
    }
    //Comprobamos si ha habido tantas coincidencias como letras que no son espacios y si no coinciden retornamos false
    if (comprobados.length!=letras(palab1)){
        return false;
    }
    return true;
}

//Esta función cuenta todos los caracteres que no son espacios
function letras(pala){
    var total=0;
    for (var i=0; i<pala.length; i++){
        if (pala.charAt(i)!=" "){
            total++;
        }
    }
    return total;
}

//Cambia el mensaje en salida
function mensaje(testo){
    document.getElementById("salida").innerHTML=testo;
}
//Cambia el mensaje en error
function error(testo){
    mensaje(""); //Llamando a esta función nos ahorramos un par de líneas de código
    document.getElementById("error").innerHTML=testo;
}

document.getElementById("anagrama").addEventListener("click", pograma);   //EventListener para iniciar la función pograma
}//Final