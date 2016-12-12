(function() {
  'use strict';

  function GamesFactory($http) {

    return {
      getGames: getGames,
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

    function getGame() {

    }

    function createGame(content) {
      var req = {
        method: 'POST',
        url: '/games',
        headers: {
          'Content-Type': undefined
        },
        data: { content }
      }

      return $http(req)
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