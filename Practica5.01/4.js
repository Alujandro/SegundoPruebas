"use strict";
window.onload = function () {   //Necesario
    
    function reset(){   //Creo esta función para devolver la página al estado original
        document.getElementById("papel").style.display="inline";
        document.getElementById("basura").src="img/papecia.png";
    }

    var papel=document.getElementById("papel"); //Guardo el elemento que vamos a arrastrar, que es el papel
    papel.setAttribute("draggable", true);  //Le añado el atributo draggable

    document.addEventListener("dragover",
    function (evento){
        evento.preventDefault();    //Evitamos el comportamiento por defecto
    },
    false);

    document.addEventListener("drop",
    function (evento){
        evento.preventDefault();    //Evitamos el comportamiento por defecto
        if (evento.target.id=="basura"){    //Y si soltamos el papel encima del elemento basura, escondemos el papel y cambiamos la imagen de basura
            document.getElementById("papel").style.display="none";
            document.getElementById("basura").src="img/papellena.png";
        }
    })

    var elem=document.getElementById("boton");    //Guardamos el elemento botón


    elem.onclick=function (){ reset() }; //Acción al pulsar el botón

}