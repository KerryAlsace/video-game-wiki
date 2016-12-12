(function() {
  'use strict';

  function GamesController(GamesFactory) {
    var vm = this;

    // Callable methods on the vm:
    vm.getGame = getGame;
    vm.createGame = createGame;
    vm.updateGame = updateGame;
    vm.deleteGame = deleteGame;

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getGames()
    }

    function getGames() {
      return GamesFactory.getGames()
                        .then(setGames)
    }

    function getGame() {
      
    }

    function createGame() {
      
    }

    function updateGame() {
      
    }

    function deleteGame() {
      
    }

    function setGames(data) {
      return vm.games = data;
    }

  }

  angular
    .module('app')
    .controller('GamesController', GamesController)
    
}());