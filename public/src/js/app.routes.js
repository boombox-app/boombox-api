(function () {
  angular.module('player').config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function Config ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeController as vm'
      });

    $locationProvider.html5Mode(true);
  }

})();
