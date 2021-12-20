"use strict";

export class Agenda {
    static NOMBREDATOS="guardados";

    
    getContactos(){
        return JSON.parse(localStorage.getItem(NOMBREDATOS));
    }
    //Métodos de modificar/almacenar los datos
    aniadir(){
        let arr=JSON.parse(localStorage.getItem(NOMBREDATOS));
        let nombre=document.getElementById("nombre").value;
        let apellidos=document.getElementById("apellidos").value;
        let direccion=document.getElementById("direccion").value;
        let telefono=document.getElementById("telefono").value;
        let contacto=[nombre, apellidos, direccion, telefono];
        arr.push(contacto);
        localStorage.setItem(NOMBREDATOS,JSON.stringify(arr));
    }
    //Busca el atributo que se le pase, independientemente de la posición y devuelve todas las coincidencias del array
    buscar(att){
        let arr=JSON.parse(localStorage.getItem(NOMBREDATOS));
        if (arr.length==0){
            return false;
        }
        let contactos=[];
        for (let i=0; i<arr.length; i++){
            for (let j=0; j<arr[i].length; j++){
                if (arr[i][j]==att){
                    contactos.push(arr[i]);
                }
            }
        }
        console.log(contactos);
        return contactos;
    }
    //Elimina el contacto que se encuentre en la posición que se le pasa a la función
    borrar(id){
        let arr=JSON.parse(localStorage.getItem(NOMBREDATOS));
        if (arr.length==0){
            return false;
        }
        for (let i=0; i<arr.length; i++){
            arr.splice(id, 1);
        }
        localStorage.setItem(NOMBREDATOS,JSON.stringify(arr));
        return true;
    }
    listar(){
        let arr=JSON.parse(localStorage.getItem(NOMBREDATOS));
        for (let i=0; i<total; i++){
            console.log(arr[i]);
        }
    }
    //Este método ordena el array de arrays usando la segunda posición, que son los apellidos.
    ordenar(){
        let arr=JSON.parse(localStorage.getItem(NOMBREDATOS));
        //Según la documentación de mozilla, esta es la forma adecuada para ordenar el array de la forma que quiero
        arr.sort(function(a, b) {
            var valorA = a[1].toUpperCase(); // Ignora mayúsculas y minúsculas
            var valorB = b[1].toUpperCase(); // Ignora mayúsculas y minúsculas
            if (valorA < valorB) {
              return -1;
            }
            if (valorA > valorB) {
              return 1;
            }
          
            // Si los valores son iguales
            return 0;
          });
        localStorage.setItem(NOMBREDATOS,JSON.stringify(arr));
    }
}