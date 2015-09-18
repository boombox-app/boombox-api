(function () {

  require('angular');
  require('ui-router');

  angular
  .module('player', [
    'ui.router'
  ]);

  //Modules
  require('./app.routes');

  //Controllers
  require('./controllers/player.controller.js');

  //Directives
  require('./directives/player.directive.js');
})();
