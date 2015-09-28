(function () {

  require('angular');
  require('ui-router');

  angular
  .module('player', [
    'ui.router'
  ]);

  // Routes
  require('./app.routes.js');

  // Modules
  require('./shared/*.js', {mode: 'expand'});
  require('./player/*.js', {mode: 'expand'});
  require('./home/*.js', {mode: 'expand'});

})();
