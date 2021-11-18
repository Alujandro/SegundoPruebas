"use strict";

window.onload = function () {   //Necesario
    //Variables "globales"
    var imagen=null;    //Variable que guarda la imagen que se oculta
    var ide=null;       //Variable que guarda el ID de un elemento
    var imagenes=["1.jpg","1.jpg","2.jpg","2.jpg","3.jpg","3.jpg","4.jpg","4.jpg","5.jpg","5.jpg","6.jpg","6.jpg"];
    var imoriginal=null;    //Variable para guardar la ruta de la imagen que oculta los números
    var aciertos=0;
    var intentos=0;
    var fin=false;  //Esta variable sirve para indicar el fin
    var es=false;   //Esta variable me asegura que no hay una comprobación en progreso
    
    //Función para comenzar el juego
    function pograma(){
        temporizador();
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

    function error(val){
        if (val){
            document.getElementById("error").innerHTML="ERROR";
        } else {
            document.getElementById("error").innerHTML="";
        }
        
    }

    function intentar(){
        intentos++;
        document.getElementById("intentos").innerHTML="Intentos: "+intentos;
    }

    function victoria(){
        fin=true;
        var chaild=document.createElement("h1")
        chaild.innerHTML="Victoria";
        document.getElementById("tabla").appendChild(chaild);
        
    }

    //Función que define el comportamiento del clic sobre las imágenes
    function clicar(evento){
        //Comprobamos que el elemento no se ha dado la vuelta
        if (evento.target.src!=imoriginal){
            error(true);
            return false;
        } else {
            error(false);
            //Si no se ha dado la vuelta, se le da
            evento.target.src=imagenes[evento.target.id];
        }
        //Comprobamos si hay un elemento que comparar
        if (imagen==null){  //Si no hay elemento se guarda su imagen y su id
            ide=evento.target.id;
            imagen=imagenes[ide];
        } else {    //Si hay elemento que comparar, lo comparamos
            if (imagen==imagenes[evento.target.id] && ide!=evento.target.id && !es){
                intentar();
                aciertos++;
                imagen=null;
                if (aciertos==6){
                    victoria();
                }
            } else {
                intentar();
                es=true;    //Esta es la base del funcionamiento de todo el programa evitando que se rompa al pulsar imágenes muy rápido
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


    //Función que lleva el temporizador
    function temporizador(){
        var min=0;
        var seg=1;
    
        var x=setInterval(function(){   //He iniciado un interval que se ejecuta cada 1000 milisegundos
            
            if (fin){ //Para el intervalo
                clearInterval(x);
                return true;
            }
            
            if (seg<10){    //Si segundos es menor a 10 se escribirá con un formato acorde a la cantidad de segundos
                document.getElementById("tiempo").innerHTML=("Tiempo: "+min+":0"+seg);
            } else {
                document.getElementById("tiempo").innerHTML=("Tiempo: "+min+":"+seg);
            }
            
            if (seg==59){    //Si hay 59 segundos, en vez de subir su número, aumentamos el valor de minutos y reiniciamos el valor de segundos
                min++;
                seg=0;
            } else {
                seg++;
            }
        }, 1000);
    }

    //De esta forma no usamos ninguna variable
    
    //Función para crear la tabla y llamar al comienzo del juego
    function iniciar(){
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
    }

    document.getElementById("tabla").innerHTML=`<button id="inicio">Comenzar</button>`;
    document.getElementById("inicio").addEventListener("click", iniciar);


    }   //Final