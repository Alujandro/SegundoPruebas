"use strict";

class Agenda {
    constructor(nom, ape, dire, tel) {
        this.nombre=nom;
        this.apellidos=ape;
        this.direccion=dire;
        this.telefono=tel;
    }
    camNom(nom){
        this.nombre=nom;
    }
    camApe(ape){
        this.apellidos=ape;
    }
    camDir(dir){
        this.direccion=dir;
    }
    camTel(tel){
        this.telefono=tel;
    }
}