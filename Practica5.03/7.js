"use strict";
//No está completado porque soy un desastre, me he quedado sin tiempo y me parece demasiado pedir más tiempo todavía para entregar la tarea
window.onload = function () {   //Necesario
    //document.getElementById("salida").parentElement.style.display="none";//Oculta el div salida
    function texto(){
        entrada(1);
        document.getElementById("aser").onclick=function (){
            var nombre=document.getElementById("nonvre").value;
            if (getId(nombre)){
                error();
            } else {
                var elemento=document.createElement("input");
                elemento.setAttribute("type","text");
                elemento.setAttribute("id",nombre);
                document.getElementById("form").appendChild(elemento);
            }
        }
    }
    
    function contras(){
        entrada(1);
        document.getElementById("aser").onclick=function (){
            var nombre=document.getElementById("nonvre").value;
            if (getId(nombre)){
                error();
            } else {
                var elemento=document.createElement("input");
                elemento.setAttribute("type","password");
                elemento.setAttribute("id",nombre);
                document.getElementById("form").appendChild(elemento);
            }
        }
    }

    function textarea(){
        entrada(1);
        document.getElementById("aser").onclick=function (){
            var nombre=document.getElementById("nonvre").value;
            if (getId(nombre)){
                error();
            } else {
                var elemento=document.createElement("textarea");
                elemento.setAttribute("rows","5");
                elemento.setAttribute("cols","40")
                elemento.setAttribute("id",nombre);
                document.getElementById("form").appendChild(elemento);
            }
        }
    }

    function label(){
        entrada(2);
        document.getElementById("aser").onclick=function (){
            var texto=document.getElementById("testo").value;
            var eleme=document.getElementById("emento").value;
            var ins=document.getElementById("emento");
            if (!getId(eleme)){
                error();
            } else {
                var elemento=document.createElement("input");
                elemento.setAttribute("for",eleme);
                elemento.innerHTML=texto;
                ins.parentElement.insertBefore(elemento,ins);
            }
        }
    }

    function imagen(){
        entrada(3);
        document.getElementById("aser").onclick=function (){
            var nombre=document.getElementById("nonvre").value;
            var valor=ducument.getElementById("balor").value;
            if (getId(nombre)){
                error();
            } else {
                var elemento=document.createElement("img");
                elemento.setAttribute("src",valor);
                elemento.setAttribute("id",nombre);
                document.getElementById("form").appendChild(elemento);
            }
        }
    }

    function checkbox(){
        entrada(1);
        document.getElementById("aser").onclick=function (){
            var nombre=document.getElementById("nonvre").value;
            if (getId(nombre)){
                error();
            } else {
                var elemento=document.createElement("input");
                elemento.setAttribute("type","text");
                elemento.setAttribute("id",nombre);
                document.getElementById("form").appendChild(elemento);
            }
        }
    }

    function radio(){

    }

    function submit(){

    }

    function getId(ide){
       var existe=document.getElementById(ide);
       if (existe!=null){
           return true;
       }
       return false;
    }

    function entrada(opcion){
        var trato=document.getElementById("salida");
        switch (opcion){
            case 1:
                trato.innerHTML=`<label for="nonvre">Nombre:</label>
                <input type="text" id="nonvre" name="nonvre" required>><br><br>
                <input type="button" value="Hacer" class="hace" id="aser">`;
                break;
            case 2:
                trato.innerHTML=`<label for="testo">Texto:</label>
                <input type="text" id="testo" name="testo" required>
                <label for="emento">Elemento:</label>
                <input type="text" id="emento" name="emento"><br><br>
                <input type="button" value="Hacer" class="hace" id="aser">`;
                break;
            case 3:
                trato.innerHTML=`<label for="nonvre">Nombre:</label>
                <input type="text" id="nonvre" name="nonvre" required>
                <label for="balor">URL:</label>
                <input type="text" id="balor" name="balor"><br><br>
                <input type="button" value="Hacer" class="hace" id="aser">`;
                break;
            case 4:
                trato.innerHTML=`<label for="nonvre">Nombre:</label>
                <input type="text" id="nonvre" name="nonvre" required>
                <label for="balor">Valor:</label>
                <input type="text" id="balor" name="balor"><br><br>
                <input type="button" value="Hacer" class="hace" id="aser">`;
                break;
        }
    }

    function error(){
        document.getElementById("error").innerHTML="Ese elemento ya existe";
    }

    //Todos los event listener
    document.getElementById("uno").addEventListener("click", texto);
    document.getElementById("dos").addEventListener("click", contras);
    document.getElementById("tres").addEventListener("click", textarea);
    document.getElementById("cuatro").addEventListener("click", label);
    document.getElementById("cinco").addEventListener("click", imagen);
    document.getElementById("seis").addEventListener("click", checkbox);
    document.getElementById("siete").addEventListener("click", radio);
    document.getElementById("ocho").addEventListener("click", submit);
    }   //Final