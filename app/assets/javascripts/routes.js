(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('home.games', {
          url: 'games',
          templateUrl: 'games/games.html',
          controller: 'GamesController as vm'
        })

      $urlRouterProvider.otherwise('/')
    })
    
}());