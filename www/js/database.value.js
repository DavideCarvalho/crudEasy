angular.module('starter')
  .value('DatabaseValues', {
    bancoDeDados: null,
    setup: function () {
      this.bancoDeDados = window.openDatabase('projetoic', '1.0', 'Banco de dados da aplicacao', 3000);
    }
  });