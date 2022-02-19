"use strict";

export const pintarLibro= (documento) => {
  let div=document.createElement("div");
  div.id=documento.id;
  div.className=documento.data().estado;
  if (div.className=="pendiente"){
    div.innerHTML+=`
    <p>Título: ${documento.data().nombre}</p>
    <p>Propietario: ${documento.data().propietario}</p>
    <p>Páginas: ${documento.data().paginas}</p>
    `;
    
  }
  if (div.className=="leyendo"){
    div.innerHTML+=`
    <p>Libro: ${documento.data().nombre}</p>
    <p>Propietario: ${documento.data().propietario}</p>
    <p>Páginas: ${documento.data().paginas}</p>
    `;
  }
  if (div.className=="leido"){
    div.innerHTML+=`
    <p>Libro: ${documento.data().nombre}</p>
    <p>Propietario: ${documento.data().propietario}</p>
    <p>Páginas: ${documento.data().paginas}</p>
    `;
  }
  return div;
}

//Formulario para la creación de la cuenta
export const pintaForm= () => {
    let div=document.createElement("div");
    let titulo=document.createElement("h3");
    titulo.innerHTML="Crear Usuario";
    div.appendChild(titulo);
    let formu=document.createElement("form");
    formu.innerHTML=`
    <label for="cnombre">Correo:</label><br>
    <input type="email" id="cnombre" name="cnombre" placeholder="ejemplo@mail.com"><br>
    <label for="mnombre">Nombre a mostrar:</label><br>
    <input type="text" id="mnombre" name="mnombre" placeholder="Nombre"><br>
    <label for="ccontras1">Contraseña:</label><br>
    <input type="password" id="ccontras1" name="ccontras1"><br>
    <label for="ccontras2">Repetir contraseña:</label><br>
    <input type="password" id="ccontras2" name="ccontras2"><br><br>
    `;
    div.appendChild(formu);
    div.id="creacion";
    let boton=document.createElement("button");
    let boton2=document.createElement("button");
    boton.id="guardausu";
    boton.innerHTML="Crear";
    boton2.id="volver";
    boton2.innerHTML="Cancelar";
    div.appendChild(boton);
    div.appendChild(boton2);
    return div;
}

//Formulario para crear un libro
export const formLibro= () => {
    let div=document.createElement("div");
    document.getElementById("cont2").innerHTML="<h3 id='adicion'>Añadir libro <button id='mostrocul'>Mostrar</button></h3>";
    let formu=document.createElement("form");
    formu.innerHTML=`
    <label for="lnombre">Título: </label><br>
    <input type="text" id="lnombre" name="lnombre" placeholder="titulo"><br><br>
    <label for="pronombre">Propietario: </label><br>
    <input type="text" id="pronombre" name="pronombre" placeholder="Biblioteca"><br><br>
    <label for="paginas">Páginas:</label><br>
    <input type="number" id="paginas" name="paginas"><br>
    `;
    div.appendChild(formu);
    div.id="nuevolibro";
    let boton=document.createElement("button");
    boton.id="newlibro";
    boton.innerHTML="Añadir";
    div.appendChild(boton);
    div.style.display="none";
    return div;
}

//Contenido de la cabecera
export const textoCabesa= (usu) => {
    let div=document.createElement("div");
    let titulo=document.createElement("h3");
    titulo.innerHTML="Libros de "+usu;
    div.appendChild(titulo);
    let boton=document.createElement("button");
    boton.innerHTML="Cerrar sesión";
    boton.id="salir";
    div.appendChild(boton);
    return div;
}