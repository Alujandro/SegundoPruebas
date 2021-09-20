"use strict";

//Función constructora del objeto Curso
function Curso(nombre, anyo, descripcion, alumnado){
    this.nombre=nombre,
    this.anyo=anyo,
    this.descripcion=descripcion,
    this.alumnado=alumnado
}

//Función para mostrar el contenido de un objeto, solución de la práctica F
function mostrar(obj){
    for (var prop in obj){
        if (typeof obj[prop]==`object`){    //Comprobación de si es un array
            console.log(" ");       //Línea en blanco para formato
            console.log("Lista: "); //Texto para indicar el inicio del array
            mostrar(obj[prop]); //Autollamamiento de la propia funcion mostrar para poder imprimir el objeto
            console.log(" ");       //Línea en blanco para formato
        } else {
            console.log(`${prop}: ${obj[prop]}`);   //Imprime el valor de los atributos del objeto
        }
    }
}
//Creación del objeto Curso como objeto
var objeto=new Curso("2º de DAW",2021,"Informática",["Juan José Romagosa","Apyr González","Rosa Melano","Ramona Jameson"]);
//Llamada a la función mostrar para llamar al objeto
mostrar(objeto);