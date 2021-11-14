"use strict";

window.onload = function () {   //Necesario
    document.getElementById("error").parentElement.style.display="none"; //Oculta el div error
    document.getElementById("salida").parentElement.style.display="none";//Oculta el div salida
    //Función para cuando se pulsa el botón guardar
    function guardar(){
        
        if (testDisco()){    //Si disco está vacío muestra un mensaje
            document.getElementById("error").parentElement.style.display="inherit"; //Muestra el div error
            document.getElementById("error").innerHTML="Disco está vacío o demasiado corto";
            return false;
        } else if (testGrupo()){    //Si grupo está vacío muestra un error
            document.getElementById("error").parentElement.style.display="inherit"; //Muestra el div error
            document.getElementById("error").innerHTML="Grupo está vacío o es demasiado corto";
            return false;
        } else if (testAnyo()){    //Si año está vacío informa sobre el fallo
            document.getElementById("error").parentElement.style.display="inherit"; //Muestra el div error
            document.getElementById("error").innerHTML="Falta un valor numérico compatible en año";
            return false;
        } else if (testLocal()){    //Si localizacion está vacío nos lo dice
            document.getElementById("error").parentElement.style.display="inherit"; //Muestra el div error
            document.getElementById("error").innerHTML="Formato de localización incompatible, tiene que ser tipo ES-001AA";
            return false;
        } else {
            document.getElementById("error").parentElement.style.display="none";    //Oculta el div error
            //Guardamos los valores en un array
            var intro=[];
            intro[0]=document.getElementById("disco").value;
            intro[1]=document.getElementById("grupo").value;
            intro[2]=document.getElementById("anyo").value;
            intro[3]=document.getElementById("tipo").value;
            intro[4]=document.getElementById("local").value;
            intro[5]=document.getElementById("prestado").checked;
            vaciar();
            meter(intro);
        }
    }

    function testDisco(){
        var exp=/.{5,}/;
        var es=document.getElementById("disco");
        if (es.value.search(exp)==-1){
            es.setAttribute("class","mal");
            return true;
        }
        es.setAttribute("class","bien");
        return false;
    }

    function testGrupo(){
        var exp=/.{5,}/;
        var es=document.getElementById("grupo");
        if (es.value.search(exp)==-1){
            es.setAttribute("class","mal");
            return true;
        }
        es.setAttribute("class","bien");
        return false;
    }

    function testAnyo(){
        var exp=/^\d{4}$/;
        var es=document.getElementById("anyo");
        if (es.value.search(exp)==-1){
            es.setAttribute("class","mal");
            return true;
        }
        es.setAttribute("class","bien");
        return false;
    }

    function testLocal(){
        var exp=/^ES\-\d{3}[A-Z]{2}$/;
        var es=document.getElementById("local");
        if (es.value.search(exp)==-1){
            es.setAttribute("class","mal");
            return true;
        }
        es.setAttribute("class","bien");
        return false;
    }
    
    //Función para vaciar el form, antes era más compleja
    function vaciar(){
        document.getElementById("form").reset();
    }
    
    //Función para introducir líneas en la tabla
    function meter(arr){
        var existe=document.getElementById("salida").firstChild;
        if (existe==null){  //Comprueba si la tabla está vacía, y si lo está, mete la primera línea
            let linea1=document.createElement("tr");
            linea1.innerHTML="<td>Disco</td><td>Grupo</td><td>Año</td><td>Tipo</td><td>Localización</td><td>Prestado</td>"; //Debería hacer esto de una forma más dinámica, pero para este ejercicio es suficiente
            document.getElementById("salida").appendChild(linea1);
        }
        var linea=document.createElement("tr"); //Creamos una línea y le vamos añadiendo los valores que se le pasa por el array
        linea.innerHTML="";
        for (var i=0; i<arr.length; i++){
            let valor=arr[i];
            //Estos dos if son para que se muestre si/no en vez de true/false
            if (arr[i]===true){
                valor="Si";
            }
            if (arr[i]===false){
                valor="No";
            }
            linea.innerHTML+="<td>"+valor+"</td>";  //Guardamos una celda dentro de la variable linea
        }
        document.getElementById("salida").parentElement.style.display="inherit";    //Muestra el div salida
        document.getElementById("salida").appendChild(linea);   //Introducimos la línea en la tabla
    }
    
    
    document.getElementById("guarda").addEventListener("click", guardar);   //EventListener para iniciar la función guardar
    }   //Final