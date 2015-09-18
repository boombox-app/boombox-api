var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    config = require('../config').nodemon;

gulp.task('server', ['build'], function () {
  nodemon({
    script: config.server,
    ext: config.ext,
    env: { 'NODE_ENV': 'development' } ,
    ignore: ['node_modules/', 'bower_components/', 'logs/', 'packages/*/*/public/assets/lib/', 'packages/*/*/node_modules/', '.DS_Store', '**/.DS_Store', '.bower-*', '**/.bower-*'],
    nodeArgs: ['--debug']
  }).on('readable', function() {
    console.log("Nodemon running");
    // this.stdout.on('data', function(chunk) {
    //   if(/Mean app started/.test(chunk)) {
    //     setTimeout(function() { plugins.livereload.reload(); }, 500);
    //   }
    //   process.stdout.write(chunk);
    // });
    // this.stderr.pipe(process.stderr);
  });
});
