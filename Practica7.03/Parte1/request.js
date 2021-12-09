"use strict";
import * as categorias from "./categorias";


//Devuelve preguntas de una categoría
export var pregunta=null;
export const conCat = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
    fetch("https://opentdb.com/api.php?amount="+categorias.cantidad()+"&category="+categorias.categoria(), { // Dirección para realizar fetch
    method:"GET",  // Establecemos método GET
    headers: {  // Se indica en las cabeceras cómo es el contenido
    'Content-type': 'application/x-www-form-urlencoded'
    }
    }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta

        if (respuesta.ok) { // Si la respuesta es correcta
            respuesta.text().then((datos) => { // Si se convierte a texto
                pregunta = JSON.parse(datos); // Respuesta en un div
                //Código de mostrar
            });
        }
    });
    resolver(pregunta);
});

//Devuelve preguntas sin especificar categoría
export const sinCat = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
    fetch("https://opentdb.com/api.php?amount="+categorias.cantidad(), { // Dirección para realizar fetch
    method:"GET",  // Establecemos método GET
    headers: {  // Se indica en las cabeceras cómo es el contenido
    'Content-type': 'application/x-www-form-urlencoded'
    }
    }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta

        if (respuesta.ok) { // Si la respuesta es correcta
            respuesta.text().then((datos) => { // Si se convierte a texto
                pregunta = JSON.parse(datos); // Respuesta en un div
                //Código de mostrar
            });
        }
    });
    resolver(pregunta);
});