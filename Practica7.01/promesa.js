"use strict";

export const promesa=new Promise ((resolver, rechazar)=>{
    if (ok){
        resolver(`Ha funcionado`);
    } else {
        rechazar(Error(`Ha fallado`));
    }
});