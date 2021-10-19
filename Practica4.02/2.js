"use strict";

//Primero llenamos la tabla
var num=1;  //Esta variable guarda el número por el que empieza cada fila
for (var i=0; i<100; i++){  //Hacemos 100 filas
    var fila=document.createElement("tr");  //Primero creamos la fila
    for (var j=num; j<num+100; j++){    //Luego llenamos la fila con 100 td con un número que empieza desde num y acaba en num+100-1 porque no llega al último valor, que sería 101
        fila.innerHTML+="<td>"+j+"</td>";
    }
    num+=100;   //Aquí incrementamos en 100 el primer número de la siguiente fila
    document.getElementById("tabla").appendChild(fila); //Y finalmente añadimos la fila a la tabla
}

//Luego creamos la función que identificará los números primos
function primos(){
    var valores=document.querySelectorAll("td");    //Seleccionamos todas las celdas td de la página.
    for (var i=0; i<valores.length; i++){
        if (esPrimo(valores[i].innerHTML)){     //Comprobamos si es un número primo
            valores[i].className="primo";       //Y si es primo le añadimos el class primo
        }
    }
}

//Función para comprobar si un número es primo
function esPrimo(valor){   
    var val=+valor; //Primero lo añadimos a una variable para asegurarnos que se trata de un número
    if (val>1){     //Si el número es mayor a 1 podemos comprobar si es primo, porque el 1 no es un número primo
        for (var j=2; j<val; j++){
            if (val%j==0){
                return false;   //Si el número es divisible por cualquier número que sea menor que él y distinto a 0, devolverá false
            }
        }
        return true;    //Si el programa llega hasta aquí será verdadero
    }
    return false;   //Si el parámetro que se le pasa no resulta ser un número mayor a 1, devolverá false
}
