"use strict";
import * as muestra from "./mostrar.js";
var digis="https://digimon-api.vercel.app/api/digimon";
var digimones=null;
export const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
    fetch(digis, { // Dirección para realizar fetch
    method:"GET",  // Establecemos método GET
    headers: {  // Se indica en las cabeceras cómo es el contenido
    'Content-type': 'application/x-www-form-urlencoded'
    }
    }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta

        if (respuesta.ok) { // Si la respuesta es correcta
            respuesta.text().then((datos) => { // Si se convierte a texto
                digimones = JSON.parse(datos); // Respuesta en un div
                pograma();
            });
        }
    });
    resolver(digimones);
});

function pograma(){
    muestra.menu();
    muestra.resumenDigimon(5,digimones);
}