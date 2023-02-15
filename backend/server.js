const express = require("express");
const app = express();

const archivoBD = require("./conexion");

const routemovie = require("./routes/_movie");

const bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use("/api/_movie", routemovie);

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor");
});

app.listen(5001, function () {
  console.log("el servidor NODE esta corriendo correctamente");
});
