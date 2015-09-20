var gulp = require('gulp'),
    browsersync = require('browser-sync');

gulp.task('default', ['watch'], browsersync.reload);
