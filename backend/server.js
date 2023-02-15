const express = require("express");
const app = express();

const archivoBD = require("./conexion");

const routeuser = require("./routes/user");

const bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use("/api/user", routeuser);

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor");
});

app.listen(5000, function () {
  console.log("el servidor NODE esta corriendo correctamente");
});
