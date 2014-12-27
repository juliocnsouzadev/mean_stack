function ObrasArteController($http, $scope) {
    $http.get('/lista').success(function (retorno) {
        $scope.obra = retorno;
    });

    $http.post('/grava', {
        nomeObra: 'As Arveres',
        tipo: 'musica',
        artista: 'Nozes',
        periodo: 'Pos Modernismo',
        criacao: 'Sec XXI'}
    )
            .success(function (retorno) {
                console.log(retorno);
            });
}
