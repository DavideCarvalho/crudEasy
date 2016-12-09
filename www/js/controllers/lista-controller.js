angular.module('starter')
    .controller('ListaController', ListaController)

function ListaController($http, $ionicPopup) {
    vm = this;
    vm.message = "It's working!";
    vm.produtos = [];

    vm.listarProdutos = listarProdutos;
    function listarProdutos() {
        $http.get('http://localhost:51305/api/pessoas')
            .success(function(dados) {
                vm.produtos = dados;
            })
            .error(function(error) {
                console.log(error);
            });
    }
    listarProdutos();

    vm.removerProduto = removerProduto;
    function removerProduto(produtoId) {
        var url = "http://localhost:51305/api/pessoas/" + produtoId;
        $http.delete(url)
            .success(function(resposta) {
                vm.produtos = vm.produtos.filter(function(produto) {
                    return produto.Id != produtoId;
                });
                $ionicPopup.alert({
                    title: 'Remoção realizada',
                    template: 'Produto removido com sucesso!'
                });
            })
            .error(function(error) {
                console.log(error);
            });
    }
}