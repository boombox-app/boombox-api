var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsersync = require('browser-sync'),
    concat = require('gulp-concat');

var config = require('../config').sass;


gulp.task('sass', function () {
  gulp.src(config.src)
  .pipe(sass({outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(concat('main.css'))
  .pipe(gulp.dest(config.dest))
  .pipe(browsersync.reload({ stream: true }));
});
