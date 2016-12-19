(function() {
  'use strict';

  function review() {
    return {
      restrict: 'E',
      scope: {
        content: '@'
      },
      require: '^reviews',
      transclude: true,
      controller: 'ReviewsController as vm',
      template: 'review.html'
    };
  }

  angular
    .module('app', [])
    .directive('review', review)
    .directive('reviews', reviews);
    
}());