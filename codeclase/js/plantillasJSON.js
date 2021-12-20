"use strict";

export const pintarUserJSON = (json) => {
  let texto = "";
  json.map((v, i, a) => {
    texto += `<div class="fila"><img class="borrar" src="./img/borrar.png" id="${i}"><div class="celda">${v.nombre} ${v.apellido} nacido en el año ${v.fecha}</div></div>`;
  });
  return texto;
};

export const pintarBien = (id) => {
  return `<div class="bien">¡Transacción con id ${id} realizada con éxito!</div>`;
};

export const pintarMal = (error) => {
  return `<div class="mal">Error al hacer la acción: ${error}.</div>`;
};

export const listarJSON = (db) => {
  usuarios.map((v, i, a) => {
    document.getElementById("datos").innerHTML += plantillas.pintarUserJSON(v);
  });
};

export const borrar = (objetoDOM) => {
  setTimeout(() => {
    objetoDOM.innerHTML = "";
  }, 2000);
};

export const limpiar = (formulario) => {
  formulario.reset();
};
