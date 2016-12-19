(function() {
  'use strict';

  function GamesController($scope, GamesFactory) {
    var vm = this;

    vm.checkedPlatforms = [];

    $scope.init = function(){
      $('.ui.selection.dropdown').dropdown();
    }
    $scope.init()

    // Callable methods on the vm:
    vm.createGame = createGame;
    vm.updateGame = updateGame;
    vm.deleteGame = deleteGame;
    vm.addPlatform = addPlatform;

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

    function createGame() {
      vm.game.platform_ids = [];
      vm.checkedPlatforms.forEach(function(platform_id) {
        vm.game.platform_ids.push(platform_id)
      })
      return GamesFactory.createGame(vm.game)
                        .then(addGame)
    }

    function updateGame() {
      
    }

    function deleteGame() {
      
    }

    function addPlatform(platform_id) {
      return vm.checkedPlatforms.push(platform_id);
      // return vm.games.platform_ids.push(platform_id);
    }

    function addGame(data) {
      console.log(data);
      return vm.games.push(data);
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