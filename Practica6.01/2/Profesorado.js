"use strict";
export class Profesorado{
    constructor(nombre, apellidos, dni, asignatura){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.asignatura=asignatura;
    }
    //Getters
    getNombre(){
        return this.nombre;
    }
    getApellidos(){
        return this.apellidos;
    }
    getDni(){
        return this.dni;
    }
    getAsignatura(){
        return this.asignatura;
    }

    //Setters
    setNombre(nom){
        this.nombre=nom;
    }
    setApellidos(ape){
        this.apellidos=ape;
    }
    setDni(dni){
        this.dni=dni;
    }
    setAsignatura(asig){
        this.asignatura=asig;
    }
}