"use strict";

const NOMBREDATOS="guardados";

function aniadir(obj){
    localStorage.setItem(NOMBREDATOS,JSON.stringify(obj));
    total++;
}

function buscar(id){
    return localStorage.getItem(id);
}

function borrar(id){
    localStorage.removeItem(id);
    total--;
}

function listar(){
    for (let i=0; i<total; i++){
        console.log(buscar(i));
    }
}

function ordenar(){

}