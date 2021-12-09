"use strict";
//No consigo acceder a la lista de personajes y no entiendo el porqué
export var todosPers=[];
var pag="https://swapi.dev/api/people";

function consultaPersonajes(){
const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
        fetch(pag, { // Dirección para realizar fetch
        method:"GET",  // Establecemos método GET
        headers: {  // Se indica en las cabeceras cómo es el contenido
        'Content-type': 'application/x-www-form-urlencoded'
        }
        }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta
            if (respuesta.ok) { // Si la respuesta es correcta
                respuesta.text().then((datos) => { // Si se convierte a texto
                    //todosPers = JSON.parse(datos); // Respuesta en un div
                    todosPers.push(JSON.parse(datos));
                    pag=todosPers[todosPers.length-1].next;
                    console.log(pag);
                    console.log(todosPers);
                    if (pag!=null){
                        obtenerPersonajes();
                    }
                });
            }
        });
        resolver(todosPers);
});
}

//Esta función la hago porque un bucle while me estaba dando demasiados problemas.
export function obtenerPersonajes(){
    consultaPersonajes();
    return todosPers;
}