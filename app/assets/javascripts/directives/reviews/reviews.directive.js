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
      template: 'directives/reviews/reviews.html',
      scope: {
        review: '@'
      },
      transclude: true,
      controller: 'ReviewsController as vm',
      restrict: 'E'
    };
  }
 
  angular
    .module('app')
    .directive('reviews', reviews);
    
}());