//funçao responsavel por redenrizar a vies
exports.index = function (req, res) {
    res.render('index');
};

exports.lista = function (req, res) {
    res.json({
        nomeObra: 'As Arveres',
        tipo: 'musica',
        artista: 'Nozes',
        periodo: 'Pos Modernismo',
        criacao: 'Sec XXI'});
};

exports.grava = function (req, res) {
    console.log('grava...');
    var obra = req.body;//para funcionar precisa add depencia: npm install --save body-parser
    console.log(obra);
    res.send('Obra: ' + obra.nomeObra + ' recebido no servidor');
};
