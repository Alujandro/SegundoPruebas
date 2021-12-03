"use strict";
var digis="https://digimon-api.vercel.app/api/digimon";

export const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
    fetch(digis, { // Dirección para realizar fetch
    method:"GET",  // Establecemos método GET
    headers: {  // Se indica en las cabeceras cómo es el contenido
    'Content-type': 'application/x-www-form-urlencoded'
    }
    }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta

        if (respuesta.ok) { // Si la respuesta es correcta
            respuesta.text().then((datos) => { // Si se convierte a texto
                peliculas = JSON.parse(datos); // Respuesta en un div
                menuPelis(peliculas);
            });
        }
    });
    resolver(peliculas);
});