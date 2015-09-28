(function () {
  angular
    .module('player')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['PopularService'];

  function HomeController (PopularService) {
    var vm = this;

    vm.songs = [];

    PopularService
      .loadPopularSongs()
      .then(response => {
        vm.songs = response.data;
      });

  }

})();
