(function() {
  'use strict';

  function GamesFactory($http, $location) {

    return {
      getGames: getGames,
      getPublishers: getPublishers,
      getGenres: getGenres,
      getPlatforms: getPlatforms,
      getGoodfors: getGoodfors,
      getGame: getGame,
      createGame: createGame,
      createReview: createReview,
      updateGame: updateGame,
      deleteGame: deleteGame
    }

    function getGames() {
      return $http.get('/games')
                  .then(handleResponse)
                  .catch(handleError)
    }

    function getPublishers() {
      return $http.get('/publishers')
                  .then(handleResponse)
                  .catch(handleError)
    }

    function getGenres() {
      return $http.get('/genres')
                  .then(handleResponse)
                  .catch(handleError)
    }

    function getPlatforms() {
      return $http.get('/platforms')
                  .then(handleResponse)
                  .catch(handleError)
    }

    function getGoodfors() {
      return $http.get('/goodfors')
                  .then(handleResponse)
                  .catch(handleError)
    }

    function getGame() {

    }

    function createGame(game) {
      var req = {
        method: 'POST',
        url: '/games',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          game: game
        }
      }

      return $http(req)
              .then(function(response) {
                $location.path('/games')
              })
              .catch(handleError)
    }

    function createReview(review) {
      var req = {
        method: 'POST',
        url: '/reviews',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          review: review
        }
      }

      return $http(req)
              .then(handleResponse)
              .catch(handleError)
    }

    function updateGame() {

    }

    function deleteGame() {

    }

    function handleResponse(response) {
      return response.data
    }

    function handleError(error) {
      console.log(error)
    }

  }

  angular
    .module('app')
    .factory('GamesFactory', GamesFactory)

}());
