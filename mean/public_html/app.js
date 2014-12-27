//variaveis de inicialização
var express = require('express');
var path = require('path');
var routes = require('./routes'); //rotas na pasta routes
var app = express();

//configurações do app
app.set('views', path.join(__dirname, 'views')); //caminho para camada views setado para pasta views
app.set('view engine', 'ejs'); //engine usada para views
app.use(express.static(path.join(__dirname, 'public')));//pasta compartilhada via middleware para processar as requisições, assim os scripts poderão ser acessados pelo navegador sem a necessidade de criar uma rota para cada um deles

//rotas
app.get('/', routes.index); //metodo index (criado no index.js) é invocado
app.get('/lista', routes.lista);

//inicializando server
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    console.log("Servidor inicializado na porta " + server.address().port);
});