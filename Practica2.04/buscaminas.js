"use strict";
var posMinas = [];
posMinas[0] = [-1, 0, 0, 0, -1, 0, 0, 0, -1];
posMinas[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
posMinas[2] = [0, 0, -1, -1, -1, 0, 0, 0, 0];
posMinas[3] = [0, 0, -1, 0, -1, 0, 0, 0, 0];
posMinas[4] = [0, 0, -1, -1, -1, 0, 0, 0, 0];
posMinas[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
posMinas[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
posMinas[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
posMinas[8] = [-1, 0, 0, 0, -1, 0, 0, 0, -1];


function aMinas(sudo){
    
    for (var i=0;i<sudo.length;i++){
        for (var j=0;j<sudo[i].length;j++){ //For para recorrer las filas
            let total=0;
            if (sudo[i][j]==0){              //Comprobación valor distinto a mina
                
            }
            sudo[i][j]+=total;
        }
    }
}

function escribir(array){
    for (var i=0;i<array.length;i++){
        let linea="";
        for (var j=0;j<array[i].length;j++){ //For para recorrer las filas
            linea+=array[i][j];
            if (array[i].length-1>j){
                linea+=",";
            }
        }
        console.log(linea);
    }
}

escribir(posMinas);
console.log("--------------------------");
aMinas(posMinas);
escribir(posMinas);

