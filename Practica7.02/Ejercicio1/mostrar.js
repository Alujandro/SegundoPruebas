"use strict";
<<<<<<< HEAD
var digitipo=["Fresh", "In Training", "Rookie", "Champion", "Ultimate", "Mega"];
var d=document;

export function menu(){
    let menu=d.createElement("div");
    let menu2=d.createElement("div");
    menu.id="estatico";
    d.getElementById("feo").appendChild(menu);
    menu2.id="dinamico";
    d.getElementById("feo").appendChild(menu2);
    contEstatico(); //Añadimos el contenido que no va a cambiar al div
}

export function resumenDigimon(tipo, digimones){
    digimones.forEach(digimongo => {
        if (digimongo.level==digitipo[tipo]){
            console.log(digimongo);
        }
    });
}

function contEstatico(){
    let titulo=d.createElement("h1");   //Creamos el título.
    titulo.innerHTML="DIGIMON API";
    d.getElementById("estatico").appendChild(titulo);

    let tabla=d.createElement("table"); //Creamos la tabla con los niveles de digimon.
    tabla.className="tablamenu";
    let fila=d.createElement("tr");
    digitipo.forEach(ti => {
        fila.innerHTML+="<td class='digitipo'>"+ti+"</td>";
    });
    tabla.appendChild(fila);
    d.getElementById("estatico").appendChild(tabla);

    nuevoEnd();
}

function nuevoEnd(){
    let acabo=document.getElementsByClassName("digitipo"); //Guardamos los elementos con class digitipo.
    for (let i=0; i<acabo.length; i++){
        acabo[i].addEventListener('click', function (evento){ /* Aquí irá la función que se ejecuta en el evento */ });
=======
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
    //Primero crea el div que contiene el recuadro de búsqueda con el texto y el botón, este botón debe estar fuera del form, porque de no ser así el programa no funciona.
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
    //Guardamos todos los elementos en el form excepto el botón que va dentro del div y éste se guarda dentro del elemento estatico, que es la parte que no va a cambiar de la página.
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(datalist);
    div.appendChild(form);
    div.appendChild(button);
    document.getElementById("estatico").appendChild(div);
}

function botonesNivel(){
    //Crea los botones para mostrar un listado de digimones por nivel, es una simple tabla con una celda por nivel.
    let tabla=document.createElement("table");
    tabla.id="niveles";
    let lin=document.createElement("tr");
    lin.innerHTML="<td id='fresh'>Fresh</td><td id='training'>In Training</td><td id='rookie'>Rookie</td><td id='champion'>Champion</td><td id='ultimate'>Ultimate</td><td id='mega'>Mega</td>"
    tabla.appendChild(lin);

    document.getElementById("estatico").appendChild(tabla);
}

function muestraBusqueda(){
    //Esta función es para mostrar el digimon que se busca en el cuadro de texto de búsqueda.
    let nom=document.getElementById("buscar").value;
    muestraDigimon(nom);
}

function muestraDigimon(nom){
    //Esta función nos muestra en un div específico la imagen, nombre y nivel del digimon que le pasamos (el nombre).
    //Primero comprobamos si ya hay un digimon mostrado en pantalla para poder quitarlo antes de mostrar otro.
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
    //Función sencilla para crear divs con un id específico, no lo he usado tanto como me esperaba.
    let div=document.createElement("div");
    div.id=ide;
    document.getElementById("dinamico").appendChild(div);
}

//Todas estas funciones son para mostrar un listado con el que se puede interactuar de digimones por nivel, son todos iguales salvo por el detalle de que cada uno es para un nivel, podría ahorrarme código, pero cuando me di cuenta, ya los tenía todos hehcos.
function muestraFresh(){
    //Primero se comprueba si ya hay un listado y si lo hay lo elimina.
    let es=document.getElementById("listin");
    if (es!=null){
        es.remove();
    }
    //Luego crea un div llamado listín y lo rellena con una lista desordenada con todos los digimon de esa categoría.
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
    //Igual que el anterior
    let es=document.getElementById("listin");
    if (es!=null){
        es.remove();
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
    //Igual que el anterior
    let es=document.getElementById("listin");
    if (es!=null){
        es.remove();
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
    //Igual que el anterior
    let es=document.getElementById("listin");
    if (es!=null){
        es.remove();
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
    //Igual que el anterior
    let es=document.getElementById("listin");
    if (es!=null){
        es.remove();
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
    //Igual que el anterior
    let es=document.getElementById("listin");
    if (es!=null){
        es.remove();
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
    //Crea los event listener de todos los elementos estáticos de la página web, que son el botón de buscar y los botones de los niveles.
    document.getElementById("encontrar").addEventListener('click', function (evento){ muestraBusqueda(evento) });
    document.getElementById("fresh").addEventListener("click", function (evento){ muestraFresh(evento) });
    document.getElementById("training").addEventListener("click", function (evento){ muestraTraining(evento) });
    document.getElementById("rookie").addEventListener("click", function (evento){ muestraRookie(evento) });
    document.getElementById("champion").addEventListener("click", function (evento){ muestraChampion(evento) });
    document.getElementById("ultimate").addEventListener("click", function (evento){ muestraUltimate(evento) });
    document.getElementById("mega").addEventListener("click", function (evento){ muestraMega(evento) });
}

function listeners2(){
    //Crea los event listener que van a aparecer o desaparecer constantemente, o sea, todos los event listener de los elementos de la lista desordenada que antes he llamado don.
    let cliqueo=document.getElementsByClassName("don");
    for (let i=0; i<cliqueo.length; i++){
        cliqueo[i].addEventListener('click', function (evento){ muestraDigimon(cliqueo[i].innerHTML, evento) });
>>>>>>> 880b92ccfea08ceb960ba3552c72a01f65405cd5
    }
}