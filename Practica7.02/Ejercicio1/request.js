"use strict";
import * as mostrar from "./mostrar.js";

export var digilista=null;
var pag="https://digimon-api.vercel.app/api/digimon";
export const promesa = new Promise((resolver, rechazar) => { // promesa con “petición al servidor”
    fetch(pag, { // Dirección para realizar fetch
    method:"GET",  // Establecemos método GET
    headers: {  // Se indica en las cabeceras cómo es el contenido
    'Content-type': 'application/x-www-form-urlencoded'
    }
    }).then((respuesta) =>{  // Código a ejecutar al recibir la respuesta

        if (respuesta.ok) { // Si la respuesta es correcta
            respuesta.text().then((datos) => { // Si se convierte a texto
                digilista = JSON.parse(datos); // Respuesta en un div
                //Código de mostrar
                mostrar.menu();
            });
        }
    });
    resolver(digilista);
});

//Todos los getters que puedo necesitar, creo que algunos no se han llegado a utilizar.
export function getFromNombre(nom){
    //Obtiene el objeto entero de un digimon a partir del nombre.
    for (let i=0; i<digilista.length; i++){
        if (digilista[i].name==nom){
            return digilista[i];
        }
    }
    return false;
}
export function getImagen(cod){
    return digilista[cod].img;
}
export function getNivel(cod){
    return digilista[cod].level;
}
export function getNombre(cod){
    return digilista[cod].name;
}
export function getTodos(){
    return digilista;
}
export function allNombres(){
    //Recoge una lista con todos los nombres
    let arr=[];
    for (let i=0; i<digilista.length; i++){
        arr.push(digilista[i].name);
    }
    return arr;
}

//Obtienen una lista de todos los digimones por nivel
export function getFresh(){
    let arr=[]; //Fresh
    for (let i=0; i<digilista.length; i++){
        if (digilista[i].level=="Fresh"){
            arr.push(digilista[i]);
        }
    }
    return arr;
}
export function getTraining(){
    let arr=[]; //In Training
    for (let i=0; i<digilista.length; i++){
        if (digilista[i].level=="In Training"){
            arr.push(digilista[i]);
        }
    }
    return arr;
}
export function getRookie(){
    let arr=[]; //Rookie
    for (let i=0; i<digilista.length; i++){
        if (digilista[i].level=="Rookie"){
            arr.push(digilista[i]);
        }
    }
    return arr;
}
export function getChampion(){
    let arr=[]; //Champion
    for (let i=0; i<digilista.length; i++){
        if (digilista[i].level=="Champion"){
            arr.push(digilista[i]);
        }
    }
    return arr;
}
export function getUltimate(){
    let arr=[]; //Ultimate
    for (let i=0; i<digilista.length; i++){
        if (digilista[i].level=="Ultimate"){
            arr.push(digilista[i]);
        }
    }
    return arr;
}
export function getMega(){
    let arr=[]; //Mega
    for (let i=0; i<digilista.length; i++){
        if (digilista[i].level=="Mega"){
            arr.push(digilista[i]);
        }
    }
    return arr;
}