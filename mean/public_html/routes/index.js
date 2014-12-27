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

exports.grava = function (req, res) {
    var obra = req.body;//para funcionar precisa add depencia: npm install --save body-parser
    console.log(obra);
    res.send('Obra: ' + obra.nomeObra + " recebido no servidor");
}