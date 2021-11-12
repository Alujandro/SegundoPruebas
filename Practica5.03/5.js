"use strict";

window.onload = function () {   //Necesario

//Función para el comportamiento general del programa
function pograma(){
    var cambia=document.getElementById("pueblo");
    if (document.getElementById("provincia").value=="non"){ //Podría hacer todo esto un switch? Si, pero me he dado cuenta tarde y así ya funciona bien
        cambia.disabled=true;   //Si el valor elegido es ---- se desactiva el select de provincias
        cambia.value="non";
    } else {
        cambia.disabled=false;  //En caso contrario, se activa el select y se le añaden las opciones acorde al valor seleccionado
        switch (document.getElementById("provincia").value){
            case "alicante":
                cambia.innerHTML=`<option value="non">----</option>
                <option value="alicante">Alicante</option>
                <option value="elche">Elche</option>
                <option value="petrer">Petrer</option>`;
                break;
            case "valencia":
                cambia.innerHTML=`<option value="non">----</option>
                <option value="valencia">Valencia</option>
                <option value="xativa">Xàtiva</option>
                <option value="torrent">Torrent</option>`;
                break;
            case "castellon":
                cambia.innerHTML=`<option value="non">----</option>
                <option value="castellon">Castellón</option>
                <option value="oropesa">Oropesa</option>
                <option value="vinaroz">Vinaroz</option>`;
                break;
            default:
                cambia.innerHTML=`<option value="non">----</option>`
        }
    }
}


document.getElementById("provincia").addEventListener("change", pograma);   //EventListener para iniciar la función pograma (No está mal escrito)
}//Final