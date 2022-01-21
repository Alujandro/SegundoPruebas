"use strict";

export const pintarFila = (documento) => {
    let precio=documento.data().precio;
    let subtotal=precio*(documento.data().cantidad*100);
  return `<div class="fila"><div class="celda"><img src="./img/tac.png" id="${ documento.id }" width="12px">  ${documento.data().cantidad} 
  ${documento.data().nombre} 
  ${documento.data().peso}  
  ${documento.data().precio}€ 
  ${subtotal/100}€ </div></div>`;
};

export const log= (documento) => {
    let precio=documento.data().precio;
    let subtotal=precio*(documento.data().cantidad*100);
  return `
  Cantidad: ${documento.data().cantidad} 
  Nombre: ${documento.data().nombre} 
  Peso: ${documento.data().peso} 
  Precio:  ${documento.data().precio}€ 
  Subtotal: ${subtotal/100}€`;
}

export const pintarBien = (id) => {
  return `<div class="bien">¡Transacción con id ${id} realizada con éxito!</div>`;
};

export const pintarMal = (error) => {
  return `<div class="mal">Error al hacer la acción: ${error}.</div>`;
};