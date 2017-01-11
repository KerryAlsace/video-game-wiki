(function() {
  'use strict';

  function CreateReview() {
    return {
      templateUrl: 'directives/reviews/create-review.html',
      transclude: true,
      restrict: 'E'
    };
  }

  angular
    .module('app')
    .directive('createReview', CreateReview);

}());
