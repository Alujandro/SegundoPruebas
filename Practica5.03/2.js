"use strict";

window.onload = function () {   //Necesario

//Función para cuando se pulsa el botón crear
function crear(){
    var parrafo=document.getElementById("texto").value;//Guarda el texto del textbox en una variable
    document.getElementById("texto").value="";//Vacía el textbox
    if (parrafo==""){    //Si el textbox está vacío muestra un error
        if (document.getElementById("error")!=null){    //Comprobamos si existe el elemento error
            document.getElementById("error").remove();  //Si existe lo borra para evitar que aparezca múltiples veces
        }
        error();
    } else {    //Si no está vacío añade el párrafo
        if (document.getElementById("error")!=null){    //Si hay un elemento error lo borra
            document.getElementById("error").remove();
        }
        meter(parrafo);
    }
}

//Función para el mensaje de error, crea el mensaje, y luego lo introduce al final del body
function error(){
    var mensaje=document.createElement("p");
    mensaje.id="error";
    mensaje.innerHTML="Error: no hay texto introducido";
    mensaje.style.color="red";
    document.getElementById("texto").parentElement.appendChild(mensaje);
}

//Función para introducir el párrafo
function meter(parr){
    var css=document.getElementById("opciones").value;  //Guarda el valor de la selección
    var parrafo = document.createElement("p");  //Creo el elemento para guardar el mensaje y en la siguiente línea añado el mensaje al elemento mensaje
    parrafo.innerHTML = parr;   //Introduce el texto en el <p>
    parrafo.setAttribute("class", css);  //Introduce el class que hemos guardado antes
    document.getElementById("salida").appendChild(parrafo);   //Introduce el texto al final del documento
}


document.getElementById("crea").addEventListener("click", crear);   //EventListener para iniciar la función crear
}   //Final