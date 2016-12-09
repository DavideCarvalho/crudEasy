angular.module('starter')
    .controller('EditarProdutoController', EditarProdutoController);

function EditarProdutoController($http, $stateParams, $state, $ionicPopup) {
    vm = this;
    vm.product = JSON.parse($stateParams.produto);
    console.log(vm.product);

    vm.editarProduto = editarProduto;
    function editarProduto(produto) {
        if (!produto.Name) {
            $ionicPopup.alert({
                title: 'Produto sem nome',
                template: 'Por favor, adicione o nome do produto'
            });
            return;
        }

        if (!produto.Price) {
            $ionicPopup.alert({
                title: 'Produto sem preço',
                template: 'Por favor, adicione o preço do produto'
            });
            return;
        }
        console.log(produto);

        $http.put('http://localhost:51305/api/pessoas/', produto)
            .success(function(res) {
                $ionicPopup.alert({
                    title: 'Edição realizada',
                    template: 'Produto editado com sucesso!'
                }).then(function() {
                    $state.go('app.lista');
                });
            })
            .error(function(err) {

            });
    }
}