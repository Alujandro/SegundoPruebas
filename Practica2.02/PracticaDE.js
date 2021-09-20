"use strict";

//Función constructora del objeto Curso, solución de la práctida D
function Curso(nombre, anyo, descripcion, alumnado){
    this.nombre=nombre,
    this.anyo=anyo,
    this.descripcion=descripcion,
    this.alumnado=alumnado
}

//Función para mostrar el contenido de un objeto, solución de la práctica E
function mostrar(obj){
    for (var prop in obj){
        if (typeof obj[prop]==`object`){    //Comprobación de si es un array
            console.log(`${prop}:`);        //Imprime el nombre de la variable
            for (var sal in obj[prop]){     //Recorre el array
                console.log(` ${obj[prop][sal]}`);
            }
        } else {
            console.log(`${prop}: ${obj[prop]}`);   //Imprime nombre: valor de los atributos del objeto
        }
    }
}
//Creación del objeto Curso como objeto
var objeto=new Curso("2º de DAW",2021,"Informática",["Juan José Romagosa","Apyr González","Rosa Melano","Ramona Jameson"]);
//Llamada a la funcióon mostrar para llamar al objeto
mostrar(objeto);