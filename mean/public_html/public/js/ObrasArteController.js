function ObrasArteController($http, $scope) {
    $http.get('/lista').success(function (retorno) {
        $scope.obras = retorno.obras;
    });

    var obraGravar = {
        nomeObra: 'As Arveres',
        tipo: 'musica',
        artista: 'Nozes',
        periodo: 'Pos Modernismo',
        criacao: 'Sec XXI'};

    $http.post('/grava', obraGravar).success(function (retorno) {
        console.log('post controller');
        console.log(retorno);
    });
}
