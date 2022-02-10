"use strict";

export const pintarFila= (documento,id) => {
  //let precio=documento.data().precio;
  //let subtotal=precio*(documento.data().cantidad*100);
return `
<tr id="${documento.id}" class="${id}">
<td class="nombre">${documento.data().nombre}</td> 
<td class="peso">${documento.data().peso}Kg</td>
<td class="precio">${documento.data().precio}€</td>
<td><button class="borrar">Eliminar</button></td>
</tr>`;
}
export const pintaProducto=(documento) => {
  return `<tr>
  <td class="nombre">${documento.data().nombre}</td> 
  <td class="peso">${documento.data().peso}Kg</td>
  <td class="precio">${documento.data().precio}€</td>
  <td class="${documento.id}"><button class="increm">Añadir</button></td>
  </tr>`;
}

export const pintarLista= (documento) => {
  let fecha=new Date(documento.data().fecha.seconds*1000); //Convertimos la fecha en un formato legible
  return `
  <table id="${documento.id}" class="productos">
  <tr>
  <td>${documento.data().nombre}</td>
  <td>${documento.data().propietario}</td>
  <td>${fecha}</td>
  </tr>
  <tr>
  <td colspan="3"><button class="eliminar">Eliminar</button><button class="masProd">Agregar Productos</button><button class="mostrar">Mostrar</button></td>
  </tr>
  </table>
  <table id="p${documento.id}">
  </table>
  `;
}
export const cabeceraLista= () => {
  return `
  <table>
  <tr>
  <th>Nombre de la lista</th>
  <th>Propietario</th>
  <th>Fecha</th>
  </tr>
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
  return `<tr><td></td><td></td><td></td><td>Total:</td><td>${total/100}€</td></tr>`; //Y esta operación, es para evitar el comportamiento extraño de float
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

export const pintaListaForm = () => {
  return `
  <form>
    <label for="nombre">Nombre de la lista: </label><br>
    <input type="text" id="nombre" name="nombre" placeholder="nombre"><br>
    <label for="propietario">Nombre del propietario: </label><br>
    <input type="text" id="propietario" name="propietario" placeholder="propietario"><br>
  </form> 
  <button id="addLista">Guardar Lista</button>
  `;
}