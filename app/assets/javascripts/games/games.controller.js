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
      getPublishers()
      getGenres()
      getPlatforms()
    }

    function getGames() {
      return GamesFactory.getGames()
                        .then(setGames)
    }

    function getPublishers() {
      return GamesFactory.getPublishers()
                        .then(setPublishers)
    }

    function getGenres() {
      return GamesFactory.getGenres()
                        .then(setGenres)
    }

    function getPlatforms() {
      return GamesFactory.getPlatforms()
                        .then(setPlatforms)
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

    function setPublishers(data) {
      return vm.publishers = data;
    }

    function setGenres(data) {
      return vm.genres = data;
    }

    function setPlatforms(data) {
      return vm.platforms = data;
    }

  }

  angular
    .module('app')
    .controller('GamesController', GamesController)
    
}());