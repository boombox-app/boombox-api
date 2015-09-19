(function () {
  angular.module('player')
    .controller('HomeController', HomeController);

  function HomeController () {
    var vm = this;

    vm.songs = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

})();
