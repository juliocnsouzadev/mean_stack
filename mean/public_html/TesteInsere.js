var Obra = require('./models/Obra');

var obra = new Obra({
    nomeObra: 'Monalisa',
    tipo: 'pintura',
    artista: 'Leonardo DaVince',
    periodo: 'Renascentismo',
    criacao: '1503–1517'
});

obra.save(function (erro, obra) {
    if (erro)
        return console.log(erro);
    console.log("Salvando com sucesso " + obra.nomeObra + " com sucesso no MongoDB...");
});