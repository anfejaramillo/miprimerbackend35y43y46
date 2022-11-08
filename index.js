console.log("Cargando configuracion...");
//Importar las dependencias
const express = require("express");

//Cargar configuracion app WEB
const PORT = 3500;

console.log("Inicializar la Aplicacion WEB...");
//Inicializar una APLICACION WEB
const app = express();

console.log("Configurando Routers...");
//Configuracion de ROUTERS
app.get(
    "/",

    function (req, res) {
        res.send("Hola estudiantes del grupo 35, 43 y 46!!!");
    }
);

app.use("/app", express.static("frontend"));

app.use("/static", express.static("frontend/static"));

console.log("Iniciando Servidor");

app.listen(
    PORT,

    function () {
        console.log(`La aplicacion WEB esta escuchando en el PUERTO: ` + PORT);
    }
);
