"use strict";
import { Curso } from "./Curso.js";


window.onload = function () {   //Necesario
    
    //Primero creamos el curso
    let primero=new Curso("Primero de carpintería",6,3,3);
    //Luego creamos un profesor 
    let profe=primero.nuevoProfesor("Manuel","Esteso","666","Carpintería");
    let prof=primero.nuevoProfesor("Santiago","Alcántara","482","Pintura");
    let mod1=primero.nuevoModulo("Carpintería","Catorce",2);
    let mod2=primero.nuevoModulo("Pintura","21",6);
    //Matriculamos alumnos
    primero.matricularAlumno("23","Ramiro","Martín","2015-03-25",6.2);
    primero.matricularAlumno("28","Marta","Kent","2015-03-25",8.5);
    primero.matricularAlumno("24","Javier","Mora","2015-03-25",3.5);
    //Añadimos módulos al curso
    primero.agregarModulo(mod1);
    primero.agregarModulo(mod2);
    //Introducimos a los profesores en los módulos
    mod1.masProfesor(profe);
    mod1.masProfesor(prof);
    mod2.masProfesor(profe);

    primero.informeCompleto();
}   //Final