var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

var config = require('../config').sass;


gulp.task('sass', function () {
  gulp.src(config.src)
  .pipe(sass({outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(concat('main.css'))
  .pipe(gulp.dest(config.dest));
});
