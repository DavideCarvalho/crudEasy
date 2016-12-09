angular.module('starter')
  .controller('LoginController', function ($state) {

    var vm = this;

    vm.realizarLogin = realizarLogin;
    function realizarLogin(login) {
      $state.go('app.lista');
    }

  });
