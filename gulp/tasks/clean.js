var gulp = require('gulp'),
  clean = require('gulp-clean');

var config = require('../config').clean;

gulp.task('clean', function() {
  return gulp.src(config.dest, {read: false})
  .pipe(clean({force: true}));
});
