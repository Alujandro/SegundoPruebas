"use strict";
import * as mostrar from "./mostrar.js";

//Devuelve preguntas de una categoría
export var pregunta=null;
export function lisPregunta(cant, cat){
    let enlace=null;
    //Comprobamos si se nos ha pasado una categoría
    if (cat=="any"){
        enlace="https://opentdb.com/api.php?amount="+cant;
    } else {
        enlace="https://opentdb.com/api.php?amount="+cant+"&category="+cat;
    }
    const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
        fetch(enlace, { // Dirección para realizar fetch
        method:"GET",  // Establecemos método GET
        headers: {  // Se indica en las cabeceras cómo es el contenido
        'Content-type': 'application/x-www-form-urlencoded'
        }
        }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta
    
            if (respuesta.ok) { // Si la respuesta es correcta
                respuesta.text().then((datos) => { // Si se convierte a texto
                    pregunta = JSON.parse(datos); // Respuesta en un div
                    //Código de mostrar
                    mostrar.muestraPreguntas(pregunta);
                });
            }
        });
        resolver(pregunta);
    });
}