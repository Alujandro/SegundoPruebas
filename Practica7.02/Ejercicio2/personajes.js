"use strict";

export var todosPers=[];
var hayPag=true;
var vueltas=0;
var pag="https://swapi.dev/api/people";


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
                    if (pag==null){
                        hayPag=false;
                    }
                });
            }
        });
        resolver(todosPers);
});
