"use strict";
//Declaración de variables en forma de array
var juan=[116,97,123];
var miguel=[116,97,123];
var maria=[97,134,105];
//Cálculo de media de todos
var mediaJuan=(juan[0]+juan[1]+juan[2])/3;
var mediaMiguel=(miguel[0]+miguel[1]+miguel[2])/3;
var mediaMaria=(maria[0]+maria[1]+maria[2])/3;

//Comparación de medias con ifs anidados con todas las posibilidades
if (mediaJuan>mediaMiguel && mediaJuan>mediaMaria){
    console.log("Gana Juan "+mediaJuan);
} else {
    if (mediaJuan<mediaMiguel && mediaMiguel>mediaMaria){
        console.log("Gana Miguel "+mediaMiguel); //Comprobación de victoria
    } else {
        if (mediaMaria>mediaMiguel && mediaJuan<mediaMaria){
            console.log("Gana Maria "+mediaMaria); //Comprobación de victoria
        } else{
            //Comprobaciones de empate
            if (mediaMaria==mediaMiguel && mediaJuan==mediaMiguel){
                console.log("Empate entre todos "+mediaMaria);
            }
            if (mediaJuan<mediaMiguel){
                console.log("Empate entre Miguel y María "+mediaMiguel);
            }
            if (mediaMaria<mediaJuan){
                console.log("Empate entre Miguel y Juan "+mediaJuan);
            }
            if (mediaMiguel<mediaJuan){
                console.log("Empate entre Juan y María "+mediaJuan);
            }
        }
    }
}