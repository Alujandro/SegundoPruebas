"use strict";
var objeto=null;
const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
    fetch("https://swapi.dev/api/planets", { // Dirección para realizar fetch
    method:"GET",  // Establecemos método GET
    headers: {  // Se indica en las cabeceras cómo es el contenido
    'Content-type': 'application/x-www-form-urlencoded'
    }
    }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta

        if (respuesta.ok) { // Si la respuesta es correcta
            respuesta.text().then((datos) => { // Si se convierte a texto
                objeto = JSON.parse(datos); // Respuesta en un div
                leeObjeto(objeto);
            });
        }
    });
    resolver(objeto);
});

function leeObjeto(ojeto){
    console.log(ojeto);
}