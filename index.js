var express = require('express');
var app = express();
// Importamos la conexión a la base de datos
var db = require('./db');
// El archivo que tiene todo el armado de la Rest API
var DinoControllers = require('./Dinoappi/DinoControllers');

//Para react |  Es un build de un proyecto React
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
 });

// La Rest API queda en /api/
app.use('/api', DinoControllers);

const port = process.env.PORT || 8080;

app.listen(port);