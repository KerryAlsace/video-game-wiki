(function() {
  'use strict';

  function GamesFactory($http) {

    return {
      getGames: getGames,
      getPublishers: getPublishers,
      getGenres: getGenres,
      getPlatforms: getPlatforms,
      getGame: getGame,
      createGame: createGame,
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