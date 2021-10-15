"use strict";

//Esta función está única y exclusivamente para identificar el botón correspondiente al id de cada texto
function botones(cadena){
    var retorno="boton";
    for (var i=4; i<cadena.length; i++){    //Este for recorre el texto desde la primera posición que contiene el número y lo añade a la variable retorno
        retorno+=cadena.charAt(i);
    }
    return retorno;
}

function toCani(cad){
    var comp=document.getElementById(cad).innerHTML
    var temp="";    //Creación de variable para devolver el resultado
    for (var i=0; i<comp.length; i++){   //Bucle para recorrer el mensaje de entrada
        if (i%2==0){                            //Si la letra se encuentra en una posición par se ejecutará la siguiente línea
            temp+=comp.charAt(i).toUpperCase();  //Que guardará la letra en la variable temp como una letra en mayúscula
        } else {
            temp+=comp.charAt(i);                //Si la letra está en posición par se guardará la letra como está en la variable temp
        }
    }
    temp+="HHH";    //Tras el bucle se añadirán las letras HHH al final del mensaje
    document.getElementById(cad).innerHTML=temp;
    var boton=botones(cad); //Nos guardamos el número del elemento para obtener el id del botón
    document.getElementById(boton).disabled=true;   //Lo deshabilitamos tras pulsarlo
}

function aniadir(){
    var texto=document.getElementById('texto').value;
    var fila = document.createElement("tr");    //Creo el elemento a añadir
    var elementos=document.querySelectorAll("tr").length; //Guardo la longitud del array de elementos tr
    fila.innerHTML=`<td onmouseover="this.style.backgroundColor='#AABBFF'" onmouseout="this.style.backgroundColor=''" id="fila${elementos}">${texto}</td><td><button id="boton${elementos}" onclick="toCani('fila${elementos}')">Caniar</button>`;//Se crea la fila entera
    document.getElementById("bodyTabla").appendChild(fila); //Añadimos la fila al final de la tabla
}