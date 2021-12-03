"use strict";
var digitipo=["Fresh", "In Training", "Rookie", "Champion", "Ultimate", "Mega"];
var d=document;

export function menu(){
    let menu=d.createElement("div");
    let menu2=d.createElement("div");
    menu.id="estatico";
    d.getElementById("feo").appendChild(menu);
    menu2.id="dinamico";
    d.getElementById("feo").appendChild(menu2);
    contEstatico(); //Añadimos el contenido que no va a cambiar al div
}

export function resumenDigimon(tipo, digimones){
    digimones.forEach(digimongo => {
        if (digimongo.level==digitipo[tipo]){
            console.log(digimongo);
        }
    });
}

function contEstatico(){
    let titulo=d.createElement("h1");   //Creamos el título.
    titulo.innerHTML="DIGIMON API";
    d.getElementById("estatico").appendChild(titulo);

    let tabla=d.createElement("table"); //Creamos la tabla con los niveles de digimon.
    tabla.className="tablamenu";
    let fila=d.createElement("tr");
    digitipo.forEach(ti => {
        fila.innerHTML+="<td class='digitipo'>"+ti+"</td>";
    });
    tabla.appendChild(fila);
    d.getElementById("estatico").appendChild(tabla);

    nuevoEnd();
}

function nuevoEnd(){
    let acabo=document.getElementsByClassName("digitipo"); //Guardamos los elementos con class digitipo.
    for (let i=0; i<acabo.length; i++){
        acabo[i].addEventListener('click', function (evento){ /* Aquí irá la función que se ejecuta en el evento */ });
    }
}