"use strict";

export var todosPers=[];
var hayPag=true;
var pag="https://swapi.dev/api/planets";

var urlpers = "https://swapi.dev/api/people";
// Petición de los datos para que sea menos caótico
var peticion = new Request(urlpers, {
    method: "GET",
    headers: new Headers({
      "Content-type": "application/x-www-form-urlencoded",
    }),
});

const planetas = () => {
    return new Promise((resolver, rechazar) => {
      fetch(peticion)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          resolver(datos);
        })
        .catch(() => {
          rechazar(new Error("Ha habido un error."));
        });
    });
};

export const damePlan = async () => {
    let personas = await planetas();
    console.log(personas);
};