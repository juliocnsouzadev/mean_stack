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
           res.send("Ocorreu um erro: " + error);
       else
        res.send("Dados da Obra " + obra.nomeObra + " salvos com sucesso!");
    });
};

exports.deleta = function (req, res) {
    var id = req.params.id;
    Obra.findByIdAndRemove(id, function (error, obra) {
        if (error)
           res.send("Ocorreu um erro: " + error);
       else
        res.send("Obra " + obra.nomeObra + " removida com sucesso!");
    });
};

exports.atualiza = function (req, res) {
    var id = req.body._id;
    delete req.body._id;
    Obra.findByIdAndUpdate(id, req.body ,function (error, obra) {
        if (error)
           res.send("Ocorreu um erro: " + error);
       else
        res.send("Dados da Obra " + obra.nomeObra + " salvos com sucesso!");
    });
};
