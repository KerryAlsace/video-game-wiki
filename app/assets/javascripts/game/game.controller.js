(function() {
  'use strict';

  function GameController(game) {
    var vm = this;

    vm.game = game.data;
  }

  angular
    .module('app')
    .controller('GameController', GameController)
    
}());