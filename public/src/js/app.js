(function () {

  var bulk = require('bulk-require');

  require('angular');
  require('ui-router');

  angular
  .module('player', [
    'ui.router'
  ]);

  require(bulk(__dirname, [
    'app.routes.js',
    '**/*.service.js',
    '**/*.controller.js',
    '**/*.directive.js'
    ])
  );

})();
