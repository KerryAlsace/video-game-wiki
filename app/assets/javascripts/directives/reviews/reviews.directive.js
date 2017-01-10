(function() {
  'use strict';

  function Reviews() {
    return {
      templateUrl: 'directives/reviews/reviews.html',
      scope: {
        reviews: '='
      },
      transclude: true,
      restrict: 'E'
    };
  }

  angular
    .module('app')
    .directive('reviews', Reviews);

}());
