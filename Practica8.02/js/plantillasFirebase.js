"use strict";

export const pintarFila= (documento) => {
  let precio=documento.data().precio;
  //let subtotal=precio*(documento.data().cantidad*100);
return `
<tr>
<td class="cantidad">${documento.data().cantidad}</td>
<td class="nombre">${documento.data().nombre}</td> 
<td class="peso">${documento.data().peso}</td>
<td class="precio">${documento.data().precio}€</td>
</tr>`;
}
export const pintarLista= (documento) => {
  let fecha=new Date(documento.data().fecha.seconds*1000); //Convertimos la fecha en un formato legible
  return `
  <table id="${documento.id}">
  <tr>
  <td>Propietario: ${documento.data().propietario}</td>
  <td>Nombre de la lista: ${documento.data().nombre}</td>
  <td>Propietario: ${documento.data().propietario}</td>
  <td>Fecha: ${fecha}</td>
  <td><button class="eliminar">Eliminar</button></td>
  <td><button class="mostrar">Mostrar</button></td>
  </tr>
  </table>
  <table id="p${documento.id}">
  </table>
  `;
}
export const total= () => {
  let canti=document.getElementsByClassName("subtotal");
  let total=0;
  for (let i=0; i<canti.length; i++){
    let nume=canti[i].innerHTML.slice(0,-1);
    total+=parseFloat(nume)*100; //Esta operación
    //console.log(canti[i].innerHTML);
  }
  return `<tr><td></td><td></td><td></td><td>Total:</td><td>${total/100}€</td></tr>`; //Y esta operación, son para evitar el comportamiento extraño de float
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
}

export const pintarListas = () => {
  return '<h1>Listas</h1>';
}