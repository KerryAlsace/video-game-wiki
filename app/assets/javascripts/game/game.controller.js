(function() {
  'use strict';

  function GameController(game) {
    var vm = this;

    vm.game = game.data;

    activate();

    function activate() {
      console.log(vm.game);
    }
  }

  angular
    .module('app')
    .controller('GameController', GameController)

}());
