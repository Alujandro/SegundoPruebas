"use strict";
var sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

var sudokuIncorrecto = [];

function esCorrecto(sudo){
    var compA=0;
    var compB=0;
    if (sudo.length!=9){    //Comprobación de cantidad de filas del sudoku
        return false;
    }
    for (var i=0;i<sudo.length;i++){
        if (sudo[i].length!=9){     //Comprobación de cantidad de números en esta fila del sudoku
            return false;
        }
        for (var j=0;j<sudo[i].length;j++){                     //For para recorrer las filas
            for (compA=0;compA<sudo.length;compA++){            //For para recorrer las columnas
                if (sudo[i][j]==sudo[i][compA] && j!=compA){    //Comparador de valores en la misma fila
                    return false;
                }
            }
            for (compA=0;compA<sudo.length;compA++){            //For para recorrer las columnas
                if (sudo[i][j]==sudo[compA][j] && i!=compA){    //Comparador de valores en la misma columna
                    return false;
                }
            }
        }
    }
    return true;
}

if(esCorrecto(sudokuCorrecto)){
    console.log("Es correcto");
} else {
    console.log("No es correcto");
}
