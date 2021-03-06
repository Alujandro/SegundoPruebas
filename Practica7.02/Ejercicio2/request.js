"use strict";
import * as personajes from "./personajes.js";

var peliculas=null;
const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
    fetch("https://swapi.dev/api/films", { // Dirección para realizar fetch
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

//Función que muestra el menú por pantalla
function menuPelis(ojeto){
    //H1 de Star Wars
    creaTitulo("Star War API");
    //H2 de Star Wars
    creaSubtitulo("Peliculas - "+ojeto.count,"feo");
    //Lista de películas
    listaPelis(ojeto);
    
    //Div dinámico que contendrá la sinopsis y esas cosas
    let dib=document.createElement("div");
    dib.id="dinamica";
    document.getElementById("feo").appendChild(dib);
}

//Función 
function listaPelis(ojeto){
    let lista=document.createElement("ul");
    let titulos=ojeto.results;
    titulos.forEach(peli => {
        let prime=document.createElement("li");
        prime.innerHTML="("+peli.episode_id+") <a id='"+peli.episode_id+"' class='peli'>"+peli.title+"</a>"; //Guardamos en el id el id de la peli para usarlo luego
        lista.appendChild(prime);
    });
    document.getElementById("feo").appendChild(lista);
    nuevoEnd(ojeto);//Para crear los event listener de las funciones de los enlaces
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
try {   //Este try catch es por si no llegan los datos bien
    let num=Number(pers);
    return lisPer[num-1].name;
}
catch {
    
}
}