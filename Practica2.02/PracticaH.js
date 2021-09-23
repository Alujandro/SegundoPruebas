"use strict";

//Función constructora del objeto Curso
function Curso(nom, an, desc, alu){
    this.nombre=nom,
    this.anyo=an,
    this.descripcion=desc,
    this.alumnado=alu, 
    this.matricular= function(obj){ //Función para añadir alumno a la lista alumnado
        this.alumnado[this.alumnado.length]=obj.nombre+" "+obj.apellidos;
    }
}

//Función constructora del objeto Estudiantes
function Estudiantes(nom,ape){
    this.nombre=nom,
    this.apellidos=ape
}

//Función para mostrar el objeto Curso
function mostrar(obj){
    for (var prop in obj){
        if (typeof obj[prop] == typeof [1,2,3,4]){
            muestrAlumnos(obj);
        }
    }
}

//Función para mostrar la lista de alumnos
function muestrAlumnos(obj){
    for(var prop in obj){
        if (typeof obj[prop] == typeof [1,2,3,4]){
            console.log(`${prop}:`);
            muestrAlumnos(obj[prop]);
        } else if(prop!="matricular"){
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

//Creación del objeto objeto mediante el constructor Curso
var objeto=new Curso("2º de Bachiller",2015,"Artístico",["Ramona Flagüers", "David Rapozza","Michael Bay","Sonic El Erizo"]);

//Creación del objeto al1 mediante el constructor Estudiantes para introducir en el array alumnado en objeto
var al1=new Estudiantes("Martyna","Johnson");
mostrar(objeto);
console.log(`Ahora iniciaremos la función matricular`);
objeto.matricular(al1);
mostrar(objeto);