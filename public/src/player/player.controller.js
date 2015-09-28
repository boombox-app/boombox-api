(function () {
  angular.module('player')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['PlayerService'];

  function PlayerController (PlayerService) {
    console.log("Player");
  }

})();
