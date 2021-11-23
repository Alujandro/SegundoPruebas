"use strict";
import { Curso } from "./Curso.js";

window.onload = function () {   //Necesario
    
    let primero=new Curso("Uno",6,2,2);
    
    function enseniar(curs){
        let arr="string";
        document.getElementById("salida").innerHTML="<thead><tr><td>Nombre</td><td>Aula</td><td>Modulos</td><td>Alumnos</td></tr></thead>";
        if (typeof(curs)=="object"){
            arr=curs;
        } else {
            arr=curs.mostrarCurso().split(':');
        }
        let body=document.createElement("tbody");
        let fila=document.createElement("tr");
        
        for (var i=0; i<arr.length; i++){
            fila.innerHTML+="<td>"+arr[i]+"</td>";
        }
        body.appendChild(fila);
        document.getElementById("salida").appendChild(body);
    }
    enseniar(primero);

    primero.matricularAlumno("23","Ramiro","Martín","2015-03-25",6.2);
    primero.matricularAlumno("28","Marta","Kent","2015-03-25",8.5);
    
    enseniar(primero.getAlumnado());

}   //Final