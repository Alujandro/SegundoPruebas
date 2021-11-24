"use strict";
import { Alumnado } from "./Alumnado.js";
import { Modulos } from "./Modulos.js";
import { Profesorado } from "./Profesorado.js";
import * as imprimir from "./Salida.js";
export class Curso{
    constructor(nomb, numAula, numModul, numAlumno){
        this.nombre=nomb;
        this.aula=numAula;
        this.modulo=numModul;
        this.modulos=new Array();
        this.alumnos=numAlumno;
        this.alumnado=new Array();
    }

    //Getters
    getMedia(){
        if (Array.isArray(this.alumnado)){
            let total=0;
            for (let i=0; i<this.alumnado.length; i++){
                total+=this.alumnado[i].getNota();
            }
            return total/this.alumnado.length;
        } else {
            return "Error";
        }
    }
    getNombre(){
        return this.nombre;
    }
    getAula(){
        return this.aula;
    }
    getModulo(){
        return this.modulo;

    }
    getModulos(){
        return this.modulos;
    }
    getAlumnos(){
        return this.alumnos;
    }
    getAlumnado(){
        return this.alumnado;
    }

    //Setters
    setNombre(nom){
        this.nombre=nom;
    }
    setAula(au){
        this.aula=au;
    }
    setModulo(mod){
        this.modulo=mod;
    }
    setAlumnos(al){
        this.alumnos=al;
    }

    //Métodos de clase
    matricularAlumno(alum, nombre, ape, fnac, nomedia){
        if (this.alumnado.length<this.alumnos){
            if (alum.prototype==Alumnado.prototype){
                let alu=new Alumnado(alum.getDni(),alum.getNombre(),alum.getApellido(),alum.getNacimiento(),alum.getNota());
                this.alumnado.push(alu);
            } else {
                let alu=new Alumnado(alum, nombre, ape, fnac, nomedia);
                this.alumnado.push(alu);
            }
        }
    }
    agregarModulo(mod){
        if (mod.prototype==Modulos.prototype && this.modulos.length<this.modulo);{
            let mon=new Modulos(mod.getNombre(), mod.getHoras(), mod.getProfesores(), mod.getProfesores());
            mon.setProfesorado(mod.getProfesorado());
            this.modulos.push(mon);
        }
    }
    nuevoModulo(nom,hor,prof){
        return new Modulos(nom,hor,prof);
    }
    nuevoProfesor(nom, ape, dni, asig){
        return new Profesorado(nom, ape, dni, asig);
    }
    sacaCurso(){
        return this.nombre+":"+this.aula+":"+this.modulo+":"+this.alumnos;
    }
    muestraCurso(){
        imprimir.mostrar(this.sacaCurso(),1);
    }
    
    sacaProfesorado(){
        //let arr;
        let profes=new Array();
        for (let i=0; i<this.getModulo().length; i++){
            for (let j=0; j<this.getModulos[i].getProfesorado().length; j++){
                profes.push(this.getModulos()[i].getProfesorado()[j]);
            }
        }
        
        return profes;
    }
    muestraProfesorado(){
        imprimir.mostrar(this.sacaProfesorado(),2);
    }
}