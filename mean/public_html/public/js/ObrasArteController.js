function ObrasArteController($http, $scope) {

    //chama a rota que faz a busca no db e atribui o retorno a variavel de escopo
    $http.get('/lista').success(function (retorno) {
        $scope.obras = retorno.obras;
    });

    function Obra() {
        this.nomeObra = '';
        this.tipo = '';
        this.artista = '';
        this.periodo = '';
        this.criacao = '';
    }
    $scope.obra = new Obra();

    $scope.adicionaObra = function () {
        $http.post('/grava', $scope.obra)
                .success(function (retorno) {
                    console.log("Deu certo");
                    console.log(retorno);
                    $scope.obras.push(retorno);
                    $scope.obra = new Obra();
                }).
                error(function (data, status, headers, config) {
                    console.log('Status:' + status);
                    console.log(data);
                });
    };

    $scope.mostraObra = function (obra) {
        $scope.obraSelecionada = obra;
    }

    $scope.removeObra = function () {

        $http.delete('/obra/' + $scope.obraSelecionada._id)
                .success(function (retorno) {
                    console.log(retorno);
                    var index = $scope.obras.indexOf($scope.obraSelecionada);
                    $scope.obraSelecionada = null;
                    $scope.obras.splice(index, 1);
                })
                .error(function (data, status, headers, config) {
                    console.log('Status:' + status);
                    console.log(data);
                });
    }
}
