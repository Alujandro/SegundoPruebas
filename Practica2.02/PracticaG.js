"use strict";
//Función constructora del objeto Curso
function Curso(nom, an, desc, alu){
    this.nombre=nom,
    this.anyo=an,
    this.descripcion=desc,
    this.alumnado=alu
}

//Función constructora del objeto Alumnado
function Alumnado(id, nombre, apellidos, aficiones, notas){
    this.id=id,
    this.nombre=nombre,
    this.apellidos=apellidos,
    this.aficiones=aficiones,
    this.notas=notas
}

function Notas( primera, segunda, tercera){
    this.primera=primera,
    this.segunda=segunda,
    this.tercera=tercera
}

//Función para imprimir las aficiones
function imprimirAficiones(obj){
    console.log(`Aficiones: `)
    for (var prop in obj.aficiones){
        console.log(`  ${obj.aficiones[prop]}`);
    }
}

//Función para calcular la media
function calcularMedia(obj){
    return "Nota media: "+(obj.notas.primera+obj.notas.segunda+obj.notas.tercera)/3;
}

//Función para mostrar el contenido de un objeto, solución de la práctica F
function mostrar(obj){
    for (var prop in obj){
        if (typeof obj[prop] != typeof [1,2,3,4]){
            console.log(`${prop}: ${obj[prop]}`);   //Imprime el valor de los atributos del objeto
        }
    }
}

//Función para mostrar el informe
function imprimirInforme(obj){
    mostrar(obj);
    imprimirAficiones(obj);
    console.log(calcularMedia(obj));

}

//Cración del objeto Notas del alumnado
var nota=new Notas(4,5,6);
//Creación del objeto Curso como objeto
var objeto=new Alumnado("6182","Cristina", "Lama Llama", ["Esquiar","Natación","Pinturas rupestres","Tenis"],nota);
//Llamada a la función mostrar para llamar al objeto
imprimirInforme(objeto);