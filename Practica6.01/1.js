"use strict";

String.prototype.repetir=function (num){
    var vuelta="";
    if (typeof(num)==typeof(1)){
        if (num<=0){
            console.log("mal");
            return false;
        } else {
            for (var i=0; i<num; i++){
                vuelta+=this.valueOf();
            }
        }
    } else {
        return false;
    }
    return vuelta;
}



console.log("Texto ".repetir(12));