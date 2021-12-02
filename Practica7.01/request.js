"use strict";
import * as personajes from "./personajes.js";

var peliculas=null;
var lisPer=personajes.obtenerPersonajes();
function obtenerPeliculas() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET","https://swapi.dev/api/films",true); // Se abre la conexión
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpRequest.onreadystatechange = function(){ // Comportamiento de onreadystatechange
        if (httpRequest.readyState == 1) {// Si la comunicación está abierta
            console.log('Cargando...');
        }
        if (httpRequest.readyState == 4 && httpRequest.status == 200){// Si se ha completado
            peliculas=JSON.parse(httpRequest.response); // Respuesta por la consola
            menuPelis(peliculas);
        }
    };
    httpRequest.send(); // Se envía la acción y la información (opcional) al servidor
};

function menuPelis(ojeto){
    //H1 de estar guars
    creaTitulo("Star War API");
    //Ache dos de estar guars
    creaSubtitulo("Peliculas - "+ojeto.count,"feo");
    //Lista de películas
    listaPelis(ojeto);
    
    //Div dinámico que contendrá la sinopsis y esas cosas
    let dib=document.createElement("div");
    dib.id="dinamica";
    document.getElementById("feo").appendChild(dib);
}

function listaPelis(ojeto){
    let lista=document.createElement("ul");
    let titulos=ojeto.results;
    titulos.forEach(peli => {
        let prime=document.createElement("li");
        prime.innerHTML="("+peli.episode_id+") <a id='"+peli.episode_id+"' class='peli'>"+peli.title+"</a>"; //Guardamos en el id el id de la peli para usarlo luego
        lista.appendChild(prime);
    });
    document.getElementById("feo").appendChild(lista);
    nuevoEnd(ojeto);//Para las funciones de los enlaces
}

//Introduce un h1 con el contenido que se le pasa dentro del div feo, porque en principio no es necesario un h1 dentro de otro elemento
function creaTitulo(testo){
    let titulo=document.createElement("h1");
    titulo.innerHTML=testo;
    titulo.id="titulo";
    document.getElementById("feo").appendChild(titulo);
}

//Introduce un h2 con el contenido que se le pasa dentro del elemento especificado
function creaSubtitulo(testo,id){
    let titulo=document.createElement("h2");
    titulo.innerHTML=testo;
    document.getElementById(id).appendChild(titulo);
}

//Introduce un h3 con el contenido que se le pasa dentro del elemento especificado
function creaSubtitulito(testo, id){
    let titulo=document.createElement("h3");
    titulo.innerHTML=testo;
    document.getElementById(id).appendChild(titulo);
}

//Añade un párrafo dentro de dinamica
function creaParrafo(testo){
    let par=document.createElement("p");
    par.innerHTML=testo;
    document.getElementById("dinamica").appendChild(par);
}

function listaPersonajes(oj){
    let ul=document.createElement("ul");
    oj.forEach(persona => {
        let li=document.createElement("li");
        let arr= persona.split("/"); //Dividimos la dirección en un array, la posición 5 contiene el número del personaje que usaremos después
        li.innerHTML=personajeI(arr[5]);
        console.log(personajeI(arr[5]));
        ul.appendChild(li);
    });
    document.getElementById("dinamica").appendChild(ul);
}

//Muestra todos los datos especificados de la película indicada
function muestraPeli(elemento, oj){
    let lista;
    document.getElementById("dinamica").innerHTML="";   //Reinicia el contenido del div para que no crezca la página de forma indefinida
    creaSubtitulo("Sinopsis", "dinamica");
    oj.results.forEach(peli => {
        if (peli.episode_id==elemento.id){
            creaSubtitulito(peli.title,"dinamica");
            creaParrafo(peli.opening_crawl);
            creaSubtitulo("Personajes", "dinamica");
            listaPersonajes(peli.characters);
        }
    });
}

//Crea los event listener de los enlaces
function nuevoEnd(objeto){
    let acabo=document.getElementsByClassName("peli"); //Guardamos los elementos con class end.
    for (let i=0; i<acabo.length; i++){
        acabo[i].addEventListener('click', function (evento){ muestraPeli(evento.target, objeto)});
    }
}

//Función que devuelve un array de personajes
function personajeI(pers){
try {
    let num=Number(pers);
    return lisPer[num-1].name;
}
catch {
    
}
}

obtenerPeliculas();