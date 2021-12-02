"use strict";

var todosPers=[];
var pag="https://swapi.dev/api/people/";

function consultaPersonajes() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",pag,true); // Se abre la conexión
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpRequest.onreadystatechange = function(){ // Comportamiento de onreadystatechange
        if (httpRequest.readyState == 1) {// Si la comunicación está abierta
            console.log('Cargando...');
        }
        if (httpRequest.readyState == 4 && httpRequest.status == 200){// Si se ha completado
            pag=JSON.parse(httpRequest.response).next;
            todosPers.push(JSON.parse(httpRequest.response));
            if (pag!=null){
                consultaPersonajes();
            } else {
                //return todosPers;
            }
        }
    };
    httpRequest.send(); // Se envía la acción y la información (opcional) al servidor
};

export function obtenerPersonajes(){
    consultaPersonajes();
    return todosPers;
}