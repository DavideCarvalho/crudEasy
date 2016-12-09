angular.module('starter')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('login');

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'views/menu.html',
                abstract: true
            })
            .state('app.lista', {
                url: '/lista',
                views: {
                    'menuContent': {
                        templateUrl: '../views/lista.html',
                        controller: 'ListaController as lista'
                    }
                }
            })
            .state('app.novoproduto', {
                url: '/novoproduto',
                views: {
                    'menuContent': {
                        templateUrl: '../views/novoproduto.html',
                        controller: 'NovoProdutoController as novoproduto'
                    }
                }
            })
            .state('app.editarproduto', {
                url: '/editarproduto/:produto',
                views: {
                    'menuContent': {
                        templateUrl: '../views/editarproduto.html',
                        controller: 'EditarProdutoController as editarproduto'
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginController as login'
            });
    })