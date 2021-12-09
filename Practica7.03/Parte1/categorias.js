"use strict";
import * as request from "./request.js";

// array=[cualquiera, cultura general(9), libros, peliculas, música, musicales y teatros, televisión, videojuegos, juegos de mesa, ciencia y naturaleza, ordenadores, mates, mitología, deportes, geografía, historia, política, arte, famosos, animales, vehiculos, comics, artilugios, anime/manga, dibujos y animación]

//Devuelve una cantidad de preguntas indicada de categoría aleatoria
export function sinCat(){
    return request.sinCat;
}
//Devuelve una cantidad de preguntas indicada de la categoría que se le ha indicado
export function conCat(){
    return request.conCat;
}

//Obtiene la categoría que se ha indicado en la página web
export function categoria(){
    return document.getElementById("categoria").value;
}
//Obtiene la cantidad de preguntas que se ha indicado en la página web
export function cantidad(){
    return document.getElementById("cantidad").value;
}