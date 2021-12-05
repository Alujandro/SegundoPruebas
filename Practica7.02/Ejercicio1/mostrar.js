"use strict";
import * as digimon from "./request.js";
var salida=document.getElementById("feo");

export function menu(){
    //Creacion de los divs que contendrán la página.
    let est=document.createElement("div");
    est.id="estatico";
    let din=document.createElement("div");
    din.id="dinamico";
    salida.appendChild(est);
    salida.appendChild(din);
}

function estatico(){
    //Creación del contenido estático de la página web.
    let h1=document.createElement("h1");
    h1.innerHTML="Digimon API";
    document.getElementById("estatico").appendChild(h1);
    document.getElementById("estatico").appendChild(sugestiones());
}

function sugestiones(){
    //Esto debería crear un form con un único parámetro de entrada que al introducir texto haga sugerencias de nombres de digimones.
    let form=document.createElement("form");
    let label=document.createElement("label");
    label.for="buscar";
    label.innerHTML="Introduce el nombre de un Digimon";
    let input=document.createElement("input");
    input.list="buscar";
    input.name="buscar";
    input.id="buscar";
    let submit=document.createElement("input");
    submit.type="submit";
    submit.value="Iniciar búsqueda";
    submit.id="encontrar";
    let datalist=document.createElement("datalist");
    for (let i=0; i<digimon.allNombres().length; i++){
        datalist.innerHTML+="<option value='"+digimon.allNombres()[i]+"'>";
    }

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(datalist);
    form.appendChild(submit);
    return form;
}