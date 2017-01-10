(function() {
  'use strict';

  function HomeController(GamesFactory) {
    var vm = this;

    // Callable methods on the vm:
    vm.searchGames = searchGames;

    // Defined methods:
    function searchGames() {
      return GamesFactory.getGames()
                        .then(function() {
                          vm.games = data.filter(function(vm.searchTerm) {
                            return (game.title == vm.searchTerm)
                          })
                        })
    }
  }

  angular
    .module('app')
    .controller('HomeController', HomeController)

}());
