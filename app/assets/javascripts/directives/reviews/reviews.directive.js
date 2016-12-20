(function() {
  'use strict';

  function ReviewsController() {
    var vm = this;

    // vm.reviews = [];

    // vm.addReview = addReview;

    // function addReview(review) {
    //   vm.reviews.push(review);
    // }
  }
     
  angular
    .module('app')
    .controller('ReviewsController', ReviewsController);
 
  function reviews() {
    return {
      templateUrl: 'directives/reviews/reviews.html',
      scope: {},
      transclude: true,
      controller: 'GamesController as vm',
      restrict: 'E',
      // bindToController: {
      //   review: '='
      // }
    };
  }
 
  angular
    .module('app')
    .directive('reviews', reviews);
    
}());