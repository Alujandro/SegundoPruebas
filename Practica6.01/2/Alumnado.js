"use strict";
export class Alumnado{
    constructor(dni, nombre, ape, fnac, nomedia){
        this.dni=dni;
        this.nombre=nombre;
        this.apellido=ape;
        this.nacimiento=fnac;
        this.nota=nomedia;
    }

    //Getters
    getEdad(){
        let hoy=new Date();
        let nacimiento=new Date(this.nacimiento);
        let edad= hoy.getFullYear() - nacimiento.getFullYear();
        let mes=hoy.getMonth() - nacimiento.getMonth();
        if (mes<0 || (mes==0 && hoy.getDate()<nacimiento.getDate())){
            edad--;
        }
        return edad;

    }
    getDni(){
        return this.dni;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getNacimiento(){
        return this.nacimiento;
    }
    getNota(){
        return this.nota;
    }

    //Setters
    setDni(dni){
        this.dni=dni;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellido(apellido){
        this.apellido=apellido;
    }
    setNacimiento(fnac){
        this.nacimiento=fnac;
    }
    setNota(nmedia){
        this.nota=nmedia;
    }

    //Métodos de clase
    esMayor(){
        if (this.getEdad()>17){
            return true;
        } else {
            return false;
        }
    }
    toString(){

        return this.getDni()+":"+this.getNombre()+":"+this.getApellido()+":"+this.getEdad()+":"+this.getNacimiento()+":"+this.getNota();
    }
}