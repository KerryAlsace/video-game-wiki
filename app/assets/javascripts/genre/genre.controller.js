(function() {
  'use strict';

  function GenreController(genre, GamesFactory, $filter) {
    var vm = this;

    vm.genre = genre.data;
    vm.header = vm.genre.name;

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
    
    function setGames(data) {
      return vm.games = data.filter(function(game) {
        return (game.genre_id == vm.genre.id)
      });
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
    .controller('GenreController', GenreController)
    
}());