(function() {
  'use strict';

  function GameController(game) {
    var vm = this;

    vm.game = game.data;

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      console.log(vm.game);
    }
  }

  angular
    .module('app')
    .controller('GameController', GameController)
    
}());