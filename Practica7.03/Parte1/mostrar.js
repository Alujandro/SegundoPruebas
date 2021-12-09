"use strict";
import * as categorias from "./categorias";

//Obtiene las preguntas
export function preguntas(){
    if (document.getElementById("categoria").value=="any"){
        return categorias.sinCat();
    } else {
        return categorias.conCat();
    }
}

//A partir de aquí deberían añadirse las funciones que escriben las preguntas y te permiten marcarlas/comprobar si son correctas