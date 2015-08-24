var Obra = require('./models/Obra');

//var obra = new Obra({
//    nomeObra: 'Monalisa',
//    tipo: 'pintura',
//    artista: 'Leonardo DaVince',
//    periodo: 'Renascentismo',
//    criacao: '1503–1517'
//});

var obra = new Obra({
    jardineiro: 'Monalisa',
    jesuis: {pintura: "mais linda", cor: "azul"},
    arveres: 2.22,
    somi: 0,
    nozes: true
});

obra.save(function (erro, obra) {
    if (erro)
        return console.log(erro);
    console.log("Salvando com sucesso " + obra.nomeObra + " com sucesso no MongoDB...");
});