var gulp   = require('gulp'),
    config = require('../config').watch;

gulp.task('watch', ['server'], function() {
  gulp.watch(config.html,    ['copy:html']);
  gulp.watch(config.sass,    ['sass']);
  gulp.watch(config.scripts, ['scripts']);
});
