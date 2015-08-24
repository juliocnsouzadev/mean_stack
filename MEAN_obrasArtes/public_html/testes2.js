var db = require('monk')('localhost/mean');
var users = db.get('arveres');

var json123 = '{"jardineiro":"Monalisa", "jesuis": {"pintura": "mais linda", "cor": "azul"}, "arveres": 2.22, "somi": 0, "nozes": true}';

var um = JSON.parse(json123);
users.insert(um);
//var dois = {
//    cabra_macho: 24,
//    milho_verde: {soboro: "mais linda", clear_arv: false},
//    zoi_d_lula: "quem falou?",
//    macueba: "2345678",
//    arv_seca: true
//}
//users.insert(dois);
//var tres = {
//    nome: "Rafael",
//    idade: 22,
//    sexo: "?",
//    casado_com: {nome: "Janine", idade: 25, gosto_musical: {tipo: "rock", lista: ["pretty reckless", "fiona apple"]}}
//}
//users.insert(tres);
db.close();


