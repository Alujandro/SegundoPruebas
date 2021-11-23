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

    //Métodos de clase
    masProfesor(profesor){
        if (profesor.prototype==Profesorado.prototype){
            let pro=new Profesorado(profesor.getNombre, profesor.getApellidos, profesor.getDni, profesor.getAsignatura);
            this.profesorado.push(pro);
        }
    }
    addProfesor(nombre,apellidos,dni,asignatura){
        let profe=new Profesorado(nombre,apellidos,dni,asignatura);
        this.masProfesor(profe);
    }
}