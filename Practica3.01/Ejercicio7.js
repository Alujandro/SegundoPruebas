"use strict";
function Cliente(nom, ape, tele, em, cod){  //Constructor para el objeto Cliente
    this.nombre=nom;
    this.apellido=ape;
    this.telefono=tele;
    this.email=em;
    this.codigopostal=cod;

    this.imprimir=function (){      //Función para imprimir el objeto
        console.log("Nombre: "+this.nombre);
        console.log("Apellidos: "+this.apellido);
        console.log("Teléfono: "+this.telefono);
        console.log("E-mail: "+this.email);

        let emilio=this.email.split('.');                   //Tratamiento del string email como array para poder sacar el valor del servidor
        let emiFinal=emilio[emilio.length-2].split('@');    //Segunda pasada para separar la @ del servidor de correo

        console.log("Servidor e-mail: "+emiFinal[emiFinal.length-1]+".com");
        console.log("Código postal: "+this.codigopostal);
    }
}

function creaCliente(texto){
    let entrada=texto.split(':');       //Separación del texto como array
    return new Cliente(entrada[0],entrada[1],entrada[2],entrada[3],entrada[4]); //Introducción de los valores al array.
}

var textoEntrada="Reinaldo:Marín Garmendia:986252484:reinaldomarin.alu@outlook.biz:03520";

var clienteFinal=creaCliente(textoEntrada);

clienteFinal.imprimir();