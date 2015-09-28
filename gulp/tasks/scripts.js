var gulp        = require('gulp'),
    browserify  = require('browserify'),
    browsersync = require('browser-sync'),
    source      = require('vinyl-source-stream'),
    globify     = require('require-globify'),
    uglify      = require('gulp-uglify'),
    babelify    = require('babelify');

var config = require('../config').scripts;

gulp.task('scripts', ['browserify']);

gulp.task('browserify', function () {
  return browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: false,
    // Specify the entry point of your app
    entries: config.src,
    // Add file extentions to make optional in your requires
    extensions: config.extensions,
    // Add transform modules before to compile
    transform: ['babelify', 'require-globify'],
    // Enable source maps!
    debug: config.debug
  })
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
