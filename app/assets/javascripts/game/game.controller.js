(function() {
  'use strict';

  function GameController(game, GamesFactory) {
    var vm = this;

    vm.game = game.data;

    // Callable methods on the vm:
    vm.createReview = createReview;
    vm.addReview = addReview;

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getGoodfors()
    }

    function getGoodfors() {
      return GamesFactory.getGoodfors()
                        .then(setGoodfors)
    }

    function createReview() {
      vm.review.goodfor_ids = [];
      vm.checkedGoodfors.forEach(function(goodfor_ids) {
        vm.review.goodfor_ids.push(goodfor_id)
      })
      return GamesFactory.createReview(vm.review)
                        .then(addReview)
    }

    function addReview(data) {
      return vm.game.reviews.push(data);
    }

    function addGoodfor(goodfor_id) {
      return vm.checkedGoodfors.push(goodfor_id)
    }

    function setGoodfors(data) {
      console.log(data);
      return vm.goodfors = data;
    }

  }

  angular
    .module('app')
    .controller('GameController', GameController)

}());
