(function() {
  'use strict';

  function GameController(game, GamesFactory, $filter) {
    var vm = this;

    vm.game = game.data;
    vm.checkedGoodfors = [];

    // Callable methods on the vm:
    vm.createReview = createReview;
    vm.addReview = addReview;
    vm.addGoodfor = addGoodfor;

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getGoodfors()
      getReviews()
    }

    function getGoodfors() {
      return GamesFactory.getGoodfors()
                        .then(setGoodfors)
    }

    function getReviews() {
      return GamesFactory.getReviews()
                        .then(setReviews)
    }

    function createReview() {
      vm.review.goodfor_ids = [];
      vm.checkedGoodfors.forEach(function(goodfor_id) {
        vm.review.goodfor_ids.push(goodfor_id)
      })

      return GamesFactory.createReview(vm.review, vm.game.id)
                        .then(addReview)
    }

    function addReview(data) {
      vm.game.reviews.push(data);
      getReviews();
      vm.review = {};
      vm.checkedGoodfors = [];
      angular.forEach(vm.goodfors, function(goodfor) {
        goodfor.selected = false;
      })
      vm.form.$setPristine();
      vm.form.$setUntouched();
      return vm.reviews.push(data);
    }

    function addGoodfor(goodfor_id) {
      return vm.checkedGoodfors.push(goodfor_id)
    }

    function setGoodfors(data) {
      return vm.goodfors = data;
    }

    function setReviews(data) {
      return vm.reviews = data.filter(function(review) {
        return (review.game_id == vm.game.id)
      });
    }

  }

  angular
    .module('app')
    .controller('GameController', GameController)

}());
