"use strict";
import * as request from "./request.js";
import * as categorias from "./categorias.js";

//Obtiene las preguntas
export function preguntas(){
    let can=categorias.cantidad();
    let cat=categorias.categoria();
    request.lisPregunta(can, cat);
    //Ver que poner
}

//A partir de aquí deberían añadirse las funciones que escriben las preguntas y te permiten marcarlas/comprobar si son correctas
export function muestraPreguntas(arr){
    let res=document.getElementById("preguntas");
    res.innerHTML="";
    for (let i=0; i<arr.results.length; i++){
        let onj=arr.results[i]; //Esto es el objeto completo con todos sus elementos
        //Aquí se enseña por pantalla el objeto con todos sus elementos
        let contenedor=document.createElement("div");
        contenedor.className="pregunta";
        contenedor.id="div"+i;
        let h3=document.createElement("h3");
        h3.innerHTML="Category: "+onj.category;
        let h4=document.createElement("h4");
        h4.innerHTML="Difficulty: "+onj.difficulty;
        let pregunta=document.createElement("p");
        pregunta.innerHTML=onj.question;
        let respuestas=radioInput(i,onj);
        let solucion=document.createElement("p");
        solucion.innerHTML="Correct answer: "+onj.correct_answer;
        solucion.className="hidden";

        contenedor.appendChild(h3);
        contenedor.appendChild(h4);
        contenedor.appendChild(pregunta);
        contenedor.appendChild(respuestas);
        contenedor.appendChild(solucion);
        res.appendChild(contenedor);
    }
    let boton=document.createElement("button");
    boton.id="comprobar";
    boton.innerHTML="Comprobar";
    res.appendChild(boton);

    //Creamos el listener del botón aquí.
    let comp=document.getElementById("comprobar");
    comp.addEventListener('click', function (evento){ comprobacion(arr) });
}
//Esta función genera todos los inputs y labels para un radio button dentro de un div
function radioInput(id1,ob){
    let contenedor=document.createElement("div");
    let max=ob.incorrect_answers.length;
    let posicion=Math.floor(Math.random()*(max));
    let arrespuestas=[];
    for (let i=0; i<max; i++){
        if (i==posicion){
            arrespuestas.push(ob.correct_answer);
        }
        arrespuestas.push(ob.incorrect_answers[i]);
    }
    for (let i=0; i<arrespuestas.length; i++){
        let input=document.createElement("input");
        input.type="radio";
        input.id=id1+"f"+i;
        input.name="ra"+id1;
        input.value=arrespuestas[i];
        input.className="marcada";
        let label=document.createElement("label");
        label.setAttribute("for",input.id);
        label.innerHTML=arrespuestas[i]+"<br>";
        contenedor.appendChild(input);
        contenedor.appendChild(label);
    }
    return contenedor;
}

function comprobacion(arrPreguntas){
    let mensa=document.getElementById("error");
    if (mensa!=null && mensa!=undefined){
        document.getElementById("error").remove();
    }
    let prearr=document.getElementsByTagName("input");
    let resparr=[];
    for (let i=0; i<prearr.length; i++){
        if (prearr[i].checked==true){
            resparr.push(prearr[i]);
        }
    }

    if (arrPreguntas.results.length==resparr.length){
        desHidden();
        compregunta(arrPreguntas.results);
    } else {
        let error=document.createElement("p");
        error.id="error";
        error.innerHTML="Todavía hay preguntas sin responder";
        document.getElementById("preguntas").appendChild(error);
    }
}

//Desoculta las respuestas correctas
function desHidden(){
    let loshidden=document.getElementsByTagName("p");
    for (let i=0; i<loshidden.length; i++){
        loshidden[i].className="mostrable";
    }
}

//Comprueba si las preguntas son correctas o incorrectas
function compregunta(preguntas){
    let k=0;
    let soluciones=[];
    let marcadas=document.getElementsByClassName("marcada");
    for (let i=0; i<preguntas.length; i++){
        soluciones.push(preguntas[i].correct_answer);
    }
    // Este for recorre todas las posiciones del array marcadas, array soluciones y los divs de las preguntas mediante su id,
    // de tal forma que cada vez que haya una pregunta en marcadas esté checked (el usuario le haya marcado una respuesta),
    // incremente el contador de k, que es una variable para recorrer las soluciones que vienen incluidas en el array preguntas,
    // con esta información, cada vez que la solución en soluciones coincida o no con el valor de marcadas, cambiaremos la clase
    // al div que engloba la pregunta por su id (que sigue la fórmula divX donde X es un número cualuqiera) que coincide con la posición
    // en el documento y con la posición en el array soluciones
    for (let i=0; i<marcadas.length; i++){
        if (marcadas[i].checked==true){
            let cambiar=document.getElementById("div"+k);
            if (marcadas[i].value==soluciones[k]){
                cambiar.className="acierto";
            } else {
                cambiar.className="fallo";
            }
            k++;
        }
    }
}