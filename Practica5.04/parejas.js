"use strict";

window.onload = function () {   //Necesario
    //Variables "globales"
    var imagen=null;
    var ide=null;
    var imagenes=["1.jpg","1.jpg","2.jpg","2.jpg","3.jpg","3.jpg","4.jpg","4.jpg","5.jpg","5.jpg","6.jpg","6.jpg"];
    var imoriginal=null;
    var aciertos=0;
    var es=false;   //Esta variable me asegura que no hay una comprobación en progreso
    
    //Esta función no tiene que ser una función, pero así está bien
    function pograma(){
        random();
        var elementos=document.getElementsByTagName("td");
        
        for (var i=0; i<elementos.length; i++){
            elementos[i].innerHTML=`<img src="fondo.jpg"/>`;
            elementos[i].firstChild.id=i;
            elementos[i].addEventListener("click", clicar);
        }
        imoriginal=document.getElementById("0").src;
    }

    //Función para cambiar las posiciones del array de forma aleatoria
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    //Función para llamar al cambio del array
    function random(){
        shuffle(imagenes);
    }

    function error(){
        console.log("ERROR");
    }

    //Función que define el comportamiento del clic sobre las imágenes
    function clicar(evento){
        //Comprobamos que el elemento no se ha dado la vuelta
        if (evento.target.src!=imoriginal){
            error();
            return false;
        } else {
            //Si no se ha dado la vuelta, se le da
            evento.target.src=imagenes[evento.target.id];
        }
        //Comprobamos si hay un elemento que comparar
        if (imagen==null){  //Si no hay elemento se guarda su imagen y su id
            ide=evento.target.id;
            imagen=imagenes[ide];
        } else {    //Si hay elemento que comparar, lo comparamos
            if (imagen==imagenes[evento.target.id] && ide!=evento.target.id && !es){
                aciertos++;
                imagen=null;
                if (aciertos==6){
                    console.log("BISTORIA");
                }
            } else {
                es=true;    //Esta es la base del funcionamiento de todo el programa
                //Esto tendrá que ser una función de estas con atraso de 0.5 segundos para que se pueda ver la imagen antes de que se esconda
                setTimeout(function() {
                    es=false;
                    document.getElementById(ide).src="fondo.jpg";
                    evento.target.src="fondo.jpg";
                    imagen=null;
                }, 500);
                
            }
        }
    }

    //De esta forma no usamos ninguna variable
    document.getElementById("tabla").innerHTML=`<table id="salida">
    <tr>
        <td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td>
    </tr>
    </table>`;
    
    pograma();

    }   //Final