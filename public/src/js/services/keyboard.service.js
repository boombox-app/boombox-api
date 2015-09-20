(function () {
  angular.module('player')
    .factory('KeyboardService', KeyboardService);

  function KeyboardService () {
    console.log("KeyboardService");

    // Spacebar -> Play/Pause
    function play () {
      return;
    }

    // Ctrl + → -> Next Track
    function next () {
      return;
    }

    // Ctrl + ← -> Next Track
    function prev () {
      return;
    }

    // ?
    function search () {
      return;
    }

    // ?
    function help () {
      return;
    }

    // ?
    function viewMode () {
      return;
    }

    return {};
  }

})();
