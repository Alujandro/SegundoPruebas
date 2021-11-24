"use strict";
import { Curso } from "./Curso.js";


window.onload = function () {   //Necesario
    
    let primero=new Curso("Uno",6,2,2);
    let profe=primero.nuevoProfesor("Manuel","Esteso","666","Manolismo");
    console.log(typeof(primero));
    
    primero.muestraCurso();

    primero.matricularAlumno("23","Ramiro","Martín","2015-03-25",6.2);
    primero.matricularAlumno("28","Marta","Kent","2015-03-25",8.5);
    primero.agregarModulo(primero.nuevoModulo("Nombre","horas",2));

    primero.getModulos()[0].masProfesor(profe);
    
    primero.muestraProfesorado();

}   //Final