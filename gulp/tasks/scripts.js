var gulp = require('gulp'),
    browserify = require('browserify'),
    browsersync = require('browser-sync'),
    source = require('vinyl-source-stream'),
    bulkify = require('bulkify'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify');

var config = require('../config').scripts;

gulp.task('scripts', ['browserify']);

gulp.task('browserify', function () {
  return browserify(config.src, { debug: true})
  .transform(babelify)
  .transform(bulkify)
  .bundle()
  .pipe(source(config.fileName))
  .pipe(gulp.dest(config.dest))
  .pipe(browsersync.reload({ stream: true }));
});

// gulp.task('minify', function () {
//   gulp.src(config.dest)
//   .pipe(uglify())
//   .pipe(gulp.dest(config.dest))
//   .pipe(browserSync.reload({ stream: true }));
// });
