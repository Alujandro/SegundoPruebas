"use strict";
import { Profesorado } from './Profesorado.js';
export class Modulos{
    constructor(nombre, nhoras, profado){
        this.nombre=nombre;
        this.horas=nhoras;
        this.profesorado=new Array();
        this.profesores=profado;
    }

    //Getters
    getNombre(){
        return this.nombre;
    }
    getHoras(){
        return this.horas;
    }
    getProfesorado(){
        return this.profesorado;
    }
    getProfesores(){
        return this.profesores;
    }

    //Setters
    setNombre(no){
        this.nombre=no;
    }
    setHoras(ho){
        this.horas=ho;
    }
    setProfesores(pr){
        this.profesores=pr;
    }
    setProfesorado(pr){
        this.profesorado=pr;
    }

    //Métodos de clase
    masProfesor(profesor){
        //if (profesor.prototype==Profesorado.prototype){
            this.profesorado.push(profesor);
        //}
    }
    addProfesor(nombre,apellidos,dni,asignatura){
        let profe=new Profesorado(nombre,apellidos,dni,asignatura);
        this.masProfesor(profe);
    }
    toString(){
        return this.nombre+":"+this.horas+":"+this.profesores;
    }
}