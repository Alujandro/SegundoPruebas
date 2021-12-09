"use strict";

var cat=9 //9~32
var enlace="https://opentdb.com/api.php?amount=1&category="+cat;

export var pregunta=null;
export const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
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
            });
        }
    });
    resolver(pregunta);
});