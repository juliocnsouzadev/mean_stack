//funçao responsavel por redenrizar a vies
exports.index = function (req, res) {
    res.render('index');
};

exports.lista = function (req, res) {
    res.json({
        nomeObra: 'Monalisa',
        tipo: 'pintura',
        artista: 'Leonardo DaVince',
        periodo: 'Renascentismo',
        criacao: '1503–1517'
    });
};