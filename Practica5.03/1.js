"use strict";

window.onload = function () {   //Necesario

//Función para llenar de checkboxes
function llenar(){
    for (var j=0; j<100; j++){
        if (j%10==0 && j>0){    //Función para hacer que sean 10 filas en vez de una fila de 100
            document.getElementById("chec").appendChild(document.createElement("br"));  //Añade un <br>
        }
        var caja=document.createElement("input");   //Crea el input
        caja.setAttribute("type","checkbox");       //Lo convierte en checkbox
        caja.setAttribute("class","aja");           //Le añade un class
        document.getElementById("chec").appendChild(caja);  //Lo introduce en el div que lo contendrá
    }
}

//Función para marcar los checkboxes
function marcar(){
    var arr=document.getElementsByClassName("aja");
    for (var i=0; i<arr.length; i++){
        arr[i].checked=true;
    }
}

//Función para desmarcar los checkboxes
function desmarcar(){
    console.log("desmarca");
    var arr=document.getElementsByClassName("aja");
    for (var i=0; i<arr.length; i++){
        arr[i].checked=false;
    }
}

llenar(); //Llama a la función que llenará el div de checkboxes
document.getElementById("mar").addEventListener("click", marcar);   //EventListener para iniciar la función marcar
document.getElementById("desm").addEventListener("click", desmarcar);   //EventListener para la función de desmarcar

} //Fin