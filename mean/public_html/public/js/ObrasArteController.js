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
                    console.log(retorno);
                });
    }

    $scope.adicionaFilme = function () {
        $http.post('/grava', $scope.filme)
                .success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log('Status:' + status);
                    console.log(data);
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log('Status:' + status);
                    console.log(data);
                });
    }




}
