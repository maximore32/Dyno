var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Importamos como módulo el esquema
var Mov = require('./dinosaurios');


// Todas las movies
router.get('/', (req, res) => {
    // Habilitamos CORS para que se pueda obtener la info desde cualquier dominio
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({}, (err, books) =>{
        if (err) return res.status(500).send({"error":"Problemas buscando los Dinosaurios"});
        res.status(200).send(books);
    });
});


router.get('/ID/:ID', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
	Mov.findOne({ ID: req.params.ID}, (err, dino) =>{
        if (err) return res.status(500).send({"error":"Problemas buscando todos los Dinosaurios"});
        if (!dino) return res.status(404).send({"error":"404"});
        res.status(200).send(dino);
    });
});

router.get('/Dinosaurio/:Dino', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
	Mov.findOne({ Dino: req.params.Dino}, (err, dino) =>{
        if (err) return res.status(500).send({"error":"Problemas buscando todos los Dinosaurios"});
        if (!dino) return res.status(404).send("Dinosaurio no encontrado: " + req.params.Dino);
        res.status(200).send(dino);
    });
});

router.get('/Altura/:Altitud', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Autor: req.params.autor}, (err, dino) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!dino) return res.status(404).send("Dino no encontrada con la Altura: " + req.params.Altitud);
        res.status(200).send(dino);
    });
});


router.get('/Periodo/:Periodo', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Periodo: req.params.Periodo}, (err, dino) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!dino) return res.status(404).send("Dino no encontrada con el Periodo: " + req.params.Periodo);
        res.status(200).send(dino);
    });
});


router.get('/Categoria/:Categoria', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Categoria: req.params.Categoria}, (err, dino) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!dino) return res.status(404).send("Dino no encontrado con la categoría: " + req.params.Categoria);
        res.status(200).send(dino);
    });
});

router.get('/Altura/:Altitud', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Altura: req.params.Altura}, (err, dino) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!dino) return res.status(404).send("Libro no encontrado con el año: " + req.params.Altura);
        res.status(200).send(dino);
    });
});



router.get('/Img/:Imagen', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    Mov.find({ Imagen: req.params.Imagen}, (err, dino) =>{
        if (err) return res.status(500).send("Problemas buscando");
        if (!dino) return res.status(404).send("Dino no encontrado con la imagen: " + req.params.Imagen);
        res.status(200).send(dino);
    });
});

module.exports = router;