"use strict";
import { Profesorado } from './Profesorado.js';
export class Modulos{
    constructor(nombre, nhoras, profado){
        this.nombre=nombre;
        this.horas=nhoras;
        this.profesorado=new Array();
        this.profesorado=profado;
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

    //Setters
    setNombre(no){
        this.nombre=no;
    }
    setHoras(ho){
        this.horas=ho;
    }

    //Métodos de clase
    addProfesorado(profesor){
        if (profesor.prototype==Profesorado.prototype){
            let pro=new Profesorado(profesor.getNombre, profesor.getApellidos, profesor.getDni, profesor.getAsignatura);
            this.profesorado.push(pro);
        }
    }
}