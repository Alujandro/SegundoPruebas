"use strict";
import { Alumnado } from "./Alumnado.js";
import { Modulos } from "./Modulos.js";
class Curso{
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
    matricularAlumno(alum){
        if (alum.prototype==Alumnado.prototype && this.alumnado.length<this.alumnos);{
            let alu=new Alumnado(alum.getDni(),alum.getNombre(),alum.getApellido(),alum.getNacimiento(),alum.getNota());
            this.alumnado.push(alu);
        }
    }
    agregarModulo(mod){
        if (mod.prototype==Modulos.prototype && this.modulos.length<this.modulo);{
            let mon=new Modulos(mod.getNombre(), mod.getHoras(), mod.getProfesorado());
            this.alumnado.push(mon);
        }
    }
}