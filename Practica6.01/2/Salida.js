"use strict";

//Este monstruo es un fallo de planificación
export function mostrar(curs,tipo,modul){
    //Primero declaramos una variable que vamos a usar principalmente como array
    let arr="";
    //Luego añadimos una línea de texto que será la "leyenda" del apartado de la tabla, pongo += para que no machaque el contenido
    document.getElementById("salida").innerHTML+=mensaje(tipo,modul);
    //Creamos un elemento body, que va a ser el contenedor de la información del objeto que se le pasa
    let body=document.createElement("tbody");
    //Creamos un elemento tr que alojará el contenido de cada elemento que se le pase
    let fila=document.createElement("tr");
    fila.innerHTML="";
    //Si el objeto que se le pasa no es un objeto, convertirá el texto en un array
    if (typeof(curs)!='object'){
        arr=curs.split(':');
        
        fila=document.createElement("tr");
        for (var i=0; i<arr.length; i++){
            fila.innerHTML+="<td>"+arr[i]+"</td>";
        }
        body.appendChild(fila);
    } else { //Si es un objeto (se espera un array de objetos), llamará al método toString de cada uno de los elementos y los convertirá en un array para poder mostrarlos debidamente
        for (var h=0; h<curs.length; h++){
            let arr=curs[h].toString().split(":");
            fila=document.createElement("tr");
            for (var i=0; i<arr.length; i++){
                //Este for añade cada valor del array en una celda
                fila.innerHTML+="<td>"+arr[i]+"</td>";
            }
            body.appendChild(fila);
        }
        
    }
    
    
    document.getElementById("salida").appendChild(body);
}

//Función para crear una leyenda de tabla personalizada
export function mensaje(tipo,modul){
    let arr="string";
    switch (tipo){
        case 1:
            return "<thead><h4>Curso</h4></thead><tr class='desc'><td>Nombre</td><td>Aula</td><td>Modulos</td><td>Alumnos</td></tr>";
        case 2:
            return "<thead><h4>"+modul+"</h4></thead><tr class='desc'><td>Nombre</td><td>Apellidos</td><td>DNI</td><td>Asignatura</td></tr>";
        case 3:
            return "<thead><h4>Alumnos</h4></thead><tr class='desc'><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Edad</td><td>Fecha de nacimiento</td><td>Nota Media</td></tr>";
        case 4:
            return "<thead><h4>Modulos</h4></thead><tr class='desc'><td>Nombre</td><td>Horas</td><td>Profesores</td></tr>";
        case 5:
            return "<thead><h4>Media del curso: "+modul+"</h4></thead>";
        default:
            return "<thead><tr class='error'><td>ERROR</td></tr></thead>";
    }
    
}
//Función para mostrar la media por pantalla
export function muesMedia(media){
    document.getElementById("salida").innerHTML+=mensaje(5,media);
}