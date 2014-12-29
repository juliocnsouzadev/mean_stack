//funçao responsavel por redenrizar a views

var Obra = require('../models/Obra');

exports.index = function (req, res) {
    res.render('index');
};

exports.lista = function (req, res) {
    Obra.find({}, function (erro, obras) {
        if (erro)
            return console.log(erro);
        res.json({obras: obras});
    });
};

exports.grava = function (req, res) {
    var obra = new Obra(req.body);//para funcionar precisa add depencia: npm install --save body-parser

    obra.save(function (error, obra) {
        if (error)
            return console.log(error);
        res.send(obra);
    });
};
