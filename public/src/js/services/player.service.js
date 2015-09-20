(function () {
  angular.module('player')
    .factory('PlayerService', PlayerService);

  function PlayerService () {
    console.log("PlayerService");

    let song;

    function init () {
      return;
    }

    function play () {
      return;
    }

    function next () {
      return;
    }

    function prev () {
      return;
    }

    function seek (pos) {
      return;
    }

    function volumeControl (pos) {
      return;
    }

    init();

    return {
      play : play,
      next : next,
      prev : prev,
      seek : seek,
      volume : volumeControl
    };
  }

})();
