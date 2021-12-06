"use strict";
import * as digimon from "./request.js";
var salida=document.getElementById("feo"); 

export function menu(){
    //Creacion de los divs que contendrán la página.
    let est=document.createElement("div");
    est.id="estatico";
    let din=document.createElement("div");
    din.id="dinamico";
    salida.appendChild(est);
    salida.appendChild(din);
    estatico();
}

function estatico(){
    //Creación del contenido estático de la página web.
    let h1=document.createElement("h1");
    h1.innerHTML="Digimon API";
    document.getElementById("estatico").appendChild(h1);
    sugestiones();
    botonesNivel();
    listeners();
}

function sugestiones(){
    //Esto debería crear un form con un único parámetro de entrada que al introducir texto haga sugerencias de nombres de digimones.
    let div=document.createElement("div");
    div.id="formol";
    let form=document.createElement("form");
    form.className="busqueda";
    let label=document.createElement("label");
    label.for="buscar";
    label.innerHTML="Introduce el nombre de un Digimon: <br>";
    let input=document.createElement("input");
    input.setAttribute("list","busco");
    input.name="buscar";
    input.id="buscar";
    let button=document.createElement("button");
    button.innerHTML="Iniciar búsqueda";
    button.id="encontrar";
    let datalist=document.createElement("datalist");
    datalist.id="busco";
    for (let i=0; i<digimon.allNombres().length; i++){
        datalist.innerHTML+="<option value='"+digimon.allNombres()[i]+"'>";
    }

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(datalist);
    div.appendChild(form);
    div.appendChild(button);
    document.getElementById("estatico").appendChild(div);
}

function botonesNivel(){
    //Crea los botones para mostrar un listado de digimones por nivel.
    let tabla=document.createElement("table");
    tabla.id="niveles";
    let lin=document.createElement("tr");
    lin.innerHTML="<td id='fresh'>Fresh</td><td id='training'>In Training</td><td id='rookie'>Rookie</td><td id='champion'>Champion</td><td id='ultimate'>Ultimate</td><td id='mega'>Mega</td>"
    tabla.appendChild(lin);

    document.getElementById("estatico").appendChild(tabla);
}

function muestraBusqueda(){
    let nom=document.getElementById("buscar").value;
    muestraDigimon(nom);
}

function muestraDigimon(nom){
    let es=document.getElementById("digivice");
    if (es!=null){
        es.remove();
    }
    let ele=digimon.getFromNombre(nom);
    let div=document.createElement("div");
    let h1=document.createElement("h1");
    let h2=document.createElement("h2");
    let imagen=document.createElement("img");
    div.id="digivice";
    imagen.src=ele.img;
    h1.innerHTML=ele.name;
    h2.innerHTML=ele.level;
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(imagen);

    document.getElementById("dinamico").appendChild(div);
}

function dinDiv(ide){
    let div=document.createElement("div");
    div.id=ide;
    document.getElementById("dinamico").appendChild(div);
}

function muestraFresh(){
    let es=document.getElementById("listin");
    if (es!=null){
        es.innerHTML="";
    }
    dinDiv("listin");
    let fr=digimon.getFresh();
    let ul=document.createElement("ul");
    for (let i=0; i<fr.length; i++){
        let li=document.createElement("li");
        li.className="don";
        li.innerHTML=fr[i].name;
        ul.appendChild(li);
    }
    document.getElementById("listin").appendChild(ul);
    listeners2();
}

function muestraTraining(){
    let es=document.getElementById("listin");
    if (es!=null){
        es.innerHTML="";
    }
    dinDiv("listin");
    let fr=digimon.getTraining();
    let ul=document.createElement("ul");
    for (let i=0; i<fr.length; i++){
        let li=document.createElement("li");
        li.className="don";
        li.innerHTML=fr[i].name;
        ul.appendChild(li);
    }
    document.getElementById("listin").appendChild(ul);
    listeners2();
}

function muestraRookie(){
    let es=document.getElementById("listin");
    if (es!=null){
        es.innerHTML="";
    }
    dinDiv("listin");
    let fr=digimon.getRookie();
    let ul=document.createElement("ul");
    for (let i=0; i<fr.length; i++){
        let li=document.createElement("li");
        li.className="don";
        li.innerHTML=fr[i].name;
        ul.appendChild(li);
    }
    document.getElementById("listin").appendChild(ul);
    listeners2();
}

function muestraChampion(){
    let es=document.getElementById("listin");
    if (es!=null){
        es.innerHTML="";
    }
    dinDiv("listin");
    let fr=digimon.getChampion();
    let ul=document.createElement("ul");
    for (let i=0; i<fr.length; i++){
        let li=document.createElement("li");
        li.className="don";
        li.innerHTML=fr[i].name;
        ul.appendChild(li);
    }
    document.getElementById("listin").appendChild(ul);
    listeners2();
}

function muestraUltimate(){
    let es=document.getElementById("listin");
    if (es!=null){
        es.innerHTML="";
    }
    dinDiv("listin");
    let fr=digimon.getUltimate();
    let ul=document.createElement("ul");
    for (let i=0; i<fr.length; i++){
        let li=document.createElement("li");
        li.className="don";
        li.innerHTML=fr[i].name;
        ul.appendChild(li);
    }
    document.getElementById("listin").appendChild(ul);
    listeners2();
}

function muestraMega(){
    let es=document.getElementById("listin");
    if (es!=null){
        es.innerHTML="";
    }
    dinDiv("listin");
    let fr=digimon.getMega();
    let ul=document.createElement("ul");
    for (let i=0; i<fr.length; i++){
        let li=document.createElement("li");
        li.className="don";
        li.innerHTML=fr[i].name;
        ul.appendChild(li);
    }
    document.getElementById("listin").appendChild(ul);
    listeners2();
}

function listeners(){
    //Crea los event listener.
    document.getElementById("encontrar").addEventListener('click', function (evento){ muestraBusqueda(evento) });
    document.getElementById("fresh").addEventListener("click", function (evento){ muestraFresh(evento) });
    document.getElementById("training").addEventListener("click", function (evento){ muestraTraining(evento) });
    document.getElementById("rookie").addEventListener("click", function (evento){ muestraRookie(evento) });
    document.getElementById("champion").addEventListener("click", function (evento){ muestraChampion(evento) });
    document.getElementById("ultimate").addEventListener("click", function (evento){ muestraUltimate(evento) });
    document.getElementById("mega").addEventListener("click", function (evento){ muestraMega(evento) });
}

function listeners2(){
    //Crea los event listener que van a aparecer o desaparecer constantemente
    let cliqueo=document.getElementsByClassName("don");
    for (let i=0; i<cliqueo.length; i++){
        cliqueo[i].addEventListener('click', function (evento){ muestraDigimon(cliqueo[i].innerHTML, evento) });
    }
}