"use strict";
window.onload = function () {   //Necesario



var sal=document.getElementById("sal"); //Guardamos el elemento, que es un h1
window.addEventListener("mousemove",(evento)=> {    //Creamos un eventListener
    sal.innerHTML="X: "+evento.x+"<br>"+" Y: "+evento.y;    //Modificamos el contenido del h1 con los valores x e y de mousemove
});

}