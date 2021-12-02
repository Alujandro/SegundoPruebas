"use strict";

var todosPers=[];
var pers=1;
var hecho=false;
var pag="https://swapi.dev/api/people/"+pers;

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
            pers++;
            if (pers==17){  //Esto lo hago, porque aparentemente el personaje 17 no existe y no se me ocurre otra forma mejor de evitar que el programa no funcione
                todosPers.push(false);
                pers++;
            }
            pag="https://swapi.dev/api/people/"+pers;
            if (pers<84 && hecho==false){
                consultaPersonajes();
            } else {
                pers=1;
                hecho=true;
                return todosPers;
            }
        }
    };
    httpRequest.send(); // Se envía la acción y la información (opcional) al servidor
};

export function obtenerPersonajes(){
    consultaPersonajes();
    return todosPers;
}