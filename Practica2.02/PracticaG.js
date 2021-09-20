"use strict";
//Función constructora del objeto Curso
function Curso(nombre, anyo, descripcion, alumnado){
    this.nombre=nombre,
    this.anyo=anyo,
    this.descripcion=descripcion,
    this.alumnado=alumnado
}

//Función constructora del objeto Alumnado
function Alumnado(id, nombre, apellidos, aficiones, notas){
    this.id=id,
    this.nombre=nombre,
    this.apellidos=apellidos,
    this.aficiones=aficiones,
    this.notas=notas

    imprimirAficiones= () => {mostrar(this.aficiones)}
    imprimirInforme= () => {
        mostrar(this);
        imprimirAficiones();
        console.log(this.notas.calcularMedia());
        console.log("funciona");
    }
}

function Notas( primera, segunda, tercera){
    this.primera=primera,
    this.segunda=segunda,
    this.tercera=tercera,

    calcularMedia= () => {return (this.primera+this.segunda+this.tercera)/3}

}

//Función para mostrar el contenido de un objeto, solución de la práctica F
function mostrar(obj){
    for (var prop in obj){
        console.log(`${obj[prop]}`);   //Imprime el valor de los atributos del objeto
    }
}
//Cración del objeto Notas del alumnado
var nota=new Notas(4,5,6);
//Creación del objeto Curso como objeto
var objeto=new Alumnado("6182","Cristina", "Lama Llama", ["Esquiar","Natación","Pinturas rupestres","Tenis"],nota);
//Llamada a la función mostrar para llamar al objeto
objeto.imprimirInforme();