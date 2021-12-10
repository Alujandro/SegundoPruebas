"use strict";
import * as listeners from "./listeners.js";
import * as request from "./request.js";
import * as categorias from "./categorias.js";
import * as mostrar from "./mostrar.js";

window.onload = function () {   //Necesario

    listeners.listeners(mostrar.preguntas);

}