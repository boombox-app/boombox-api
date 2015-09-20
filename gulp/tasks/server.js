var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browsersync = require('browser-sync'),
    config = require('../config').nodemon;

gulp.task('server', ['build'], function () {
  nodemon({
    script: config.server,
    ext: config.ext,
    env: { 'NODE_ENV': 'development' } ,
    ignore: ['node_modules/', 'bower_components/', 'logs/', 'packages/*/*/public/assets/lib/', 'packages/*/*/node_modules/', '.DS_Store', '**/.DS_Store', '.bower-*', '**/.bower-*'],
    nodeArgs: ['--debug']
  })
  .on('readable', function() {
    console.log("Nodemon running");
  })
  .on('restart', function () {
    // browsersync.reload({ stream: true });
    // browsersync.notify('Nodemon was restarted!');
  });
});
