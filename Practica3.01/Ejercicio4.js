"use strict";

var x=setInterval(function(){   //He iniciado el interval
    var fecha=new Date();   //Guardo la fecha en una variable

    console.log(fecha.toDateString());  //Llamo al método toDateString() porque tiene un formato adecuado ya definido

    clearInterval(x);   //Termino el intervalo
    
    
}, 10000);