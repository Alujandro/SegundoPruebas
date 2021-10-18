"use strict";
function cambiArray(arr){
    for (var j=0; j<arr.length; j++){
        //He usado search porque si no lo hacía no reconocía la palabra sexo. por tener un punto
        if (arr[j].search("sexo")==0){  //Al haber una coincidencia, cambia la posición del array por el texto marcado
            arr[j]="<span class="+"censura"+">Contenido bloqueado</span>";
        }
    }

}

var d=document;
var padre=d.getElementsByTagName("body");   //Primero guardamos el elemento padre
var parrafos=padre[0].children; //Luego guardamos el array de hijos

for (var i=0; i<parrafos.length; i++){  
    //Recorremos el array para separar el texto de cada hijo en un array
    var lista=parrafos[i].innerHTML;
    var arrlista=lista.split(" ");
    //Y luego a cada uno de esos arrays le cambiamos la palabra sexo
    cambiArray(arrlista);
    //Finalmente unimos el array hijo en una variable
    lista="";
    for (var j=0; j<arrlista.length; j++){
        lista+=arrlista[j]+" ";
    }
    parrafos[i].innerHTML=lista;    //Y luego se guarda el contenido de la variable como el texto del hijo
}