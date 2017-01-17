(function() {
  'use strict';

  function GamesController($scope, GamesFactory) {
    var vm = this;

    vm.header = 'Games';
    vm.checkedPlatforms = [];


    $scope.init = function(){
      $('.ui.selection.dropdown').dropdown();
      $('.ui.floating.labeled.icon.dropdown.button').dropdown();
    }
    $scope.init()

    // Callable methods on the vm:
    vm.createGame = createGame;
    vm.addPlatform = addPlatform;
    vm.filterGamesBy = filterGamesBy;
    vm.upvote = upvote;

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getGames()
      getPublishers()
      getGenres()
      getPlatforms()
      getGoodfors()
      vm.loaded = false;
    }

    function upvote(game) {
      return game.vote += 1
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
      return GamesFactory.getGames()
                        .then(setFilteredGames)
    }

    function setFilteredGames(data) {
      var goodforId = angular.element('div.item.ng-binding.ng-scope.selected')[0].dataset.value

      return vm.games = data.filter(function(game) {
        return game.goodfor_ids.includes(parseInt(goodforId))
      })
    }

    function addGame(data) {

      return vm.games.push(data);
    }

    function setGames(data) {
      vm.games = data;
      vm.games.forEach(function(game) {
        game.vote = 0;
      })
      vm.loaded = true;
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
