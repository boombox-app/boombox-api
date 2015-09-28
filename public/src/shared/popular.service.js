(function () {
  angular
    .module('player')
    .factory('PopularService', PopularService);

  PopularService.$inject = ['$http'];

  function PopularService ($http) {

    function loadPopularSongs () {
      console.log("-> popular");
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/popular-songs'
      });
    }

    return {
      loadPopularSongs : loadPopularSongs
    }
  }

})();
