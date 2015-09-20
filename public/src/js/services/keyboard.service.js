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

    // Ctrl + ← -> Previous Track
    function prev () {
      return;
    }

    // Ctrl + ↑ or ↓ -> Change the Volume of song
    function volume () {
      return;
    }

    // → -> Advanced 15 seconds in the track
    function seekNext () {
      return;
    }

    // Ctrl + ← -> Back 15 seconds in the track
    function seekPrev () {
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
