(function() {
  'use strict';

  function GamesController($scope, GamesFactory) {
    var vm = this;

    vm.header = 'Games';
    vm.checkedPlatforms = [];

    $scope.init = function(){
      $('.ui.selection.dropdown').dropdown();
    }
    $scope.init()

    // Callable methods on the vm:
    vm.createGame = createGame;
    vm.addPlatform = addPlatform;
    vm.filterGamesBy = filterGamesBy;

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getGames()
      getPublishers()
      getGenres()
      getPlatforms()
      getGoodfors()
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

    function getGoodfors() {
      return GamesFactory.getGoodfors()
                        .then(setGoodfors)
    }

    function createGame() {
      vm.game.platform_ids = [];
      vm.checkedPlatforms.forEach(function(platform_id) {
        vm.game.platform_ids.push(platform_id)
      })
      return GamesFactory.createGame(vm.game)
                        .then(addGame)
    }

    function addPlatform(platform_id) {
      return vm.checkedPlatforms.push(platform_id);
    }

    function filterGamesBy() {
      var filterString = angular.element('input')[0].value;
      var filterObject = filterString.split(',');
      debugger
    }

    function addGame(data) {
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

    function setGoodfors(data) {
      return vm.goodfors = data;
    }

  }

  angular
    .module('app')
    .controller('GamesController', GamesController)

}());
