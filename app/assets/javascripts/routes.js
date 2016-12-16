(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'GamesController as vm'
        })
        .state('home.games', {
          url: 'games',
          templateUrl: 'games/games.html',
          controller: 'GamesController as vm'
        })
        .state('home.newGame', {
          url: 'games/new',
          templateUrl: 'games/new.html',
          controller: 'GamesController as vm'
        })
        .state('home.showGame', {
          url: 'games/:id',
          templateUrl: 'games/show.html',
          controller: 'GameController as vm',
          resolve: {
            game: function($http, $stateParams) {
              return $http.get('/games/' + $stateParams.id);
            }
          }
        })
        .state('home.publishers', {
          url: 'publishers',
          templateUrl: 'publishers/publishers.html',
          controller: 'PublishersController as vm'
        })
        .state('home.showPublisher', {
          url: 'publishers/:id',
          templateUrl: 'games/games.html',
          controller: 'PublisherController as vm',
          resolve: {
            publisher: function($http, $stateParams) {
              return $http.get('/publishers/' + $stateParams.id);
            }
          }
        })
        .state('home.genres', {
          url: 'genres',
          templateUrl: 'genres/genres.html',
          controller: 'GenresController as vm'
        }).state('home.platforms', {
          url: 'platforms',
          templateUrl: 'platforms/platforms.html',
          controller: 'PlatformsController as vm'
        })

      $urlRouterProvider.otherwise('/')
    })
    
}());