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
<tr id="${documento.id}">
<td>Cantidad: ${documento.data().cantidad}</td>
<td>Nombre: ${documento.data().nombre}</td> 
<td>Peso: ${documento.data().peso}</td>
<td>Precio:  ${documento.data().precio}€</td> 
<td>Subtotal: ${subtotal/100}€</td>
</tr>`;
}
export const log2= (documento) => {
  let fecha=new Date(documento.data().fecha.seconds*1000); //Mágico
return `
Fecha: ${fecha} 
Nombre: ${documento.data().nombre} 
Productos: ${documento.data().productos} 
Propietario:  ${documento.data().propietario} `
}

export const pintarProductos = () => {
  return `<h1>Productos</h1>`;
};

export const pintarMal = (error) => {
  return `<div class="mal">Error al hacer la acción: ${error}.</div>`;
};