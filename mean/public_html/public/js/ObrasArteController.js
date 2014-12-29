function ObrasArteController($http, $scope) {
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
        $http.post('/grava', $scope.obra).success(function (retorno) {
            console.log(retorno);
        });
    };




}
