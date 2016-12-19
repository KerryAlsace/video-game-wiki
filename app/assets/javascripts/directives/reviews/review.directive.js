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
      template: 'reviews/review.html',
      link: function ($scope, $element, $attrs, $ctrl) {
        
      }
    };
  }

  angular
    .module('app')
    .directive('review', review)
    .directive('reviews', reviews);
    
}());