var dest = "./_build";
var src = './public/src';
var views = './public/views';

module.exports = {
  browsersync : {
    proxy: "http://localhost:3000",
    port           : 8080,
    // reloadDelay    : 777,
    // reloadDebounce : 333,
    index          : dest + 'index.html',
    debugInfo      : true,
    notify         : true,
    open           : false,
    injectChanges  : true,
    ghostMode : {
      clicks   : true,
      location : true,
      forms    : true,
      scroll   : true
    },
    files: [ src + '/**/*.*', views + '/**/*.*' ]
  },
  nodemon: {
    server : './app/index.js',
    ext : 'html js',
  },
  clean : {
    dest : dest
  },
  scripts : {
    fileName : 'app.js',
    src: src + '/js/app.js',
    dest : dest + '/assets/js'
  },
  sass: {
    src: [
      src + '/sass/main.scss'
    ],
    dest: dest + '/assets/css'
  },
  html: {
    src: [
      views + '/**/*'
    ],
    dest : dest
  },
  watch: {
    html:    views + '/**/*',
    sass:    src + '/sass/**/*.{sass,scss}',
    scripts: src + '/js/**/*.js',
    images:  src + '/img/**/*'
  }
};
