angular.module('catalogo')
        .controller('ObrasArteController', function ($http, $scope) {

            $scope.cabecalhoNovo = "Nova Obra";

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

            var adicionaObra = function () {
                $http.post('/grava', $scope.obra)
                        .success(function (retorno) {
                            $scope.obras.push($scope.obra);
                            $scope.obra = new Obra();
                            alert(retorno);
                        }).
                        error(function (data, status, headers, config) {
                            console.log('Status:' + status);
                            console.log(data);
                        });
            };

            var atualizaObra = function () {
                $http.put('/obra', $scope.obra)
                        .success(function (retorno) {

                            $scope.obra = new Obra();
                            alert(retorno);
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
                            var index = $scope.obras.indexOf($scope.obraSelecionada);
                            $scope.obraSelecionada = null;
                            $scope.obras.splice(index, 1);
                            alert(retorno);
                        })
                        .error(function (data, status, headers, config) {
                            console.log('Status:' + status);
                            console.log(data);
                        });
            }

            var atualizarCabecalho = function () {
                if ($scope.obraSelecionada)
                    return "Edição Obra";
                else
                    return "Nova Obra";
            }

            $scope.editarObra = function () {
                $scope.obra = $scope.obraSelecionada;
                $scope.cabecalhoNovo = atualizarCabecalho();
            }

            $scope.salvarObra = function () {
                console.log("entrou")
                if ($scope.obra._id) {
                    console.log("vai atualizar");
                    atualizaObra();
                }
                else {
                    console.log("vai adicionar");
                    adicionaObra();
                }
                $scope.obraSelecionada = null;
            };




        });
