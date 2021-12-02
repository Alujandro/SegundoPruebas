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
            if (pers==17){  //Esto lo hago, porque aparentemente el personaje 17 no existe y ahora mismo no se me ocurre otra forma mejor de evitar que el programa se muera.
                todosPers.push(false);
                pers++;
            }
            pag="https://swapi.dev/api/people/"+pers; //Esta línea cambia la página en la que se busca
            if (pers<84 && hecho==false){ //El último personaje es le 83, así me evito los errores de buscar en páginas que no existen.
                consultaPersonajes();
            } else {
                pers=1;
                hecho=true;
                return todosPers; //El return es para salir
            }
        }
    };
    httpRequest.send(); // Se envía la acción y la información (opcional) al servidor
};

//Esta función la hago porque un bucle while me estaba dando demasiados problemas.
export function obtenerPersonajes(){
    consultaPersonajes();
    return todosPers;
}