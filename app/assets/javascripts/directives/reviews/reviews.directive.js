(function() {
  'use strict';

  function ReviewsController(reviews) {
    var vm = this;

    vm.reviews = reviews.data;

    activate();

    function activate() {
      console.log(vm.reviews);
    }

    // vm.reviews = [];

    // vm.addReview = addReview;

    // function addReview(review) {
    //   vm.reviews.push(review);
    // }
  }
     
  angular
    .module('app')
    .controller('ReviewsController', ReviewsController);
 
  function Reviews() {
    return {
      templateUrl: 'directives/reviews/reviews.html',
      scope: {},
      transclude: true,
      controller: 'ReviewsController as vm',
      restrict: 'E'
      // bindToController: {
      //   review: '='
      // }
    };
  }
 
  angular
    .module('app')
    .directive('reviews', Reviews);
    
}());