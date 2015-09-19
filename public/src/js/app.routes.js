(function () {
  angular.module('player').config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeController as vm'
      });
  }

})();
