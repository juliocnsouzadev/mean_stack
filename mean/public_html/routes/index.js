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
    console.log('grava...');
    var obra = req.body;//para funcionar precisa add depencia: npm install --save body-parser
    console.log(obra);
    res.send('Obra: ' + obra.nomeObra + ' recebido no servidor');
};
