function ObrasArteController($http, $scope) {
    $http.get('/lista').success(function (retorno) {
        $scope.obra = retorno;
    });
}
