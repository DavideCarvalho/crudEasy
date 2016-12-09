angular.module('starter')
    .controller('NovoProdutoController', NovoProdutoController);

function NovoProdutoController($http, $ionicPopup, $state, $ionicHistory) {
    vm = this;
    vm.mandarProduto = mandarProduto;


    $ionicHistory.nextViewOptions({
        disableBack: true
    });

    function mandarProduto(produto) {
        if (!produto.nome) {
            $ionicPopup.alert({
                title: 'Produto sem nome',
                template: 'Por favor, adicione o nome do produto'
            });
            return;
        }

        if (!produto.preco) {
            $ionicPopup.alert({
                title: 'Produto sem preço',
                template: 'Por favor, adicione o preço do produto'
            });
            return;
        }
        console.log('aqui');
        console.log(produto);
        vm.produtoString = JSON.stringify(produto);
        $http.post('http://localhost:51305/api/pessoas', vm.produtoString)
            .success(function(dado) {
                $ionicPopup.alert({
                    title: 'Novo produto adicionado',
                    template: 'Novo produto adicionado com sucesso!'
                }).then(function() {
                    $state.go('app.lista');
                });
            })
            .error(function(erro) {
                console.log(erro);
            });
    }
}