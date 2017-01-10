(function() {
  'use strict';

  function CreateReview() {
    return {
      templateUrl: 'directives/reviews/create-review.html',
      transclude: true,
      controller: GamesController,
      restrict: 'E'
    };
  }

  angular
    .module('app')
    .directive('createReview', CreateReview);

}());
