(function () {
  angular.module('player')
    .directive('playerControl', playerControl);

  function playerControl () {
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'partials/player.html',
      controller: 'PlayerController'
    };
  }
})();
