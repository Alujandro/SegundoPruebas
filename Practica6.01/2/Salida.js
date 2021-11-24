"use strict";
export function mostrar(curs,tipo){
    let arr="string";
    document.getElementById("salida").innerHTML=mensaje(tipo);
    let body=document.createElement("tbody");
    let fila=document.createElement("tr");
    fila.innerHTML="<td class='Error'>Error potente</td>";
    if (typeof(curs)!='object'){
        arr=curs.split(':');
        
        fila=document.createElement("tr");
        for (var i=0; i<arr.length; i++){
            fila.innerHTML+="<td>"+arr[i]+"</td>";
        }
    }
    
    body.appendChild(fila);
    document.getElementById("salida").appendChild(body);
}

export function mensaje(tipo){
    let arr="string";
    switch (tipo){
        case 1:
            return "<thead><tr><td>Nombre</td><td>Aula</td><td>Modulos</td><td>Alumnos</td></tr></thead>";
        case 2:
            return "<thead><tr><td>Nombre</td><td>Apellidos</td><td>DNI</td><td>Asignatura</td></tr></thead>";
        default:
            return "<thead><tr class='error'><td>ERROR</td></tr></thead>";
    }
    
}