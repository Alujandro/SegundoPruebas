"use strict";
//Función constructora del objeto Curso
function Curso(nom, an, desc, alu){
    this.nombre=nom,
    this.anyo=an,
    this.descripcion=desc,
    this.alumnado=alu,
    this.matricular= function(obj){
        this.alumnado[alumnado.length]=obj.nombre+" "+obj.apellidos;
    }
}

//Función constructora del objeto Estudiantes
function Estudiantes(nom,ape){
    this.nombre=nom,
    this.apellidos=ape
}

var objeto=new Curso("2º de Bachiller",2015,"Artístico",["Ramona Flagüers", "David Rapozza","Michael Bay","Sonic El Erizo"]);
var al1=new Estudiantes("Martyna","Johnson");
objeto.matricular(al1);