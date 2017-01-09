(function() {
  'use strict';

  // function ReviewsController() {
  //   var vm = this;
  //
  //   debugger
  //   // //
  //   // // vm.reviews = reviews;
  //   //
  //   // activate();
  //   //
  //   // function activate() {
  //   //   debugger
  //   //   // console.log(vm.reviews);
  //   // }
  //   //
  //   // // vm.reviews = [];
  //   //
  //   // // vm.addReview = addReview;
  //   //
  //   // // function addReview(review) {
  //   // //   vm.reviews.push(review);
  //   // // }
  // }
  //
  // angular
  //   .module('app')
  //   .controller('ReviewsController', ReviewsController);

  function Reviews() {
    return {
      templateUrl: 'directives/reviews/reviews.html',
      scope: {
        reviews: '='
        // content: '@',
        // goodfors: '@'
      },
      transclude: true,
      // controller: 'GameController as vm',
      restrict: 'E'
    };
  }

  angular
    .module('app')
    .directive('reviews', Reviews);

}());
