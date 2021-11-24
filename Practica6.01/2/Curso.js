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
    getMedia(){
        let i;
        let total=0;
        for (i=0; i<this.alumnado.length; i++){
            total+=this.alumnado[i].getNota();
        }
        return total/i;
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

    //Métodos de clase:
    //Método para matricular a un alumno, usaría esto para todo, pero me ha dado muchos problemas
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
    //Método para mostrar alumnos
    muestraAlumnado(){
        imprimir.mostrar(this.alumnado,3);
    }
    //Método apra añadir un módulo, previene la introducción de más módulos de los indicados
    agregarModulo(mod){
        if (mod.prototype==Modulos.prototype && this.modulos.length<this.modulo);{
            let mon=new Modulos(mod.getNombre(), mod.getHoras(), mod.getProfesores(), mod.getProfesores());
            mon.setProfesorado(mod.getProfesorado());
            this.modulos.push(mon);
        }
    }
    //Crea un objeto módulo para poder guardarlo en una variable
    nuevoModulo(nom,hor,prof){
        return new Modulos(nom,hor,prof);
    }
    muestraModulo(){
        imprimir.mostrar(this.modulos,4);
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
        let profes=new Array();
        for (let i=0; i<this.getModulos().length; i++){
            for (let j=0; j<this.getModulos()[i].length; i++){
                profes.push(this.getModulos()[i].getProfesorado());
            }
            profes.push(this.getModulos()[i].getProfesorado());
        }
        return profes;
    }
    //Método para obtener el nombre de cada módulo
    sacaModulos(){
        let modus=new Array();
        for (let i=0; i<this.getModulos().length; i++){
            
            modus.push(this.getModulos()[i].getNombre());
        }
        return modus;
    }
    //Método que muestra todos los profesores separados por módulos, si un profesor da a más de un módulo, se nos muestra
    muestraProfesorado(){
        for (let i=0; i<this.sacaProfesorado().length; i++){
            imprimir.mostrar(this.sacaProfesorado()[i],2,this.sacaModulos()[i]);
        }
        
    }
    //Método para ordenar el alumnado, si se le pasa true, se ordena ascendente, si se le pasa otro valor es descendente
    ordenar(form){
        if (form){
            this.alumnado.sort();
        } else {
            this.alumnado.sort();
            this.alumnado.reverse();
        }
    }

    //Método para mostrar todo el curso
    informeCompleto(){
        this.muestraCurso();
        this.muestraModulo();
        this.muestraProfesorado();
        this.muestraAlumnado();
        imprimir.muesMedia(this.getMedia());
    }
}