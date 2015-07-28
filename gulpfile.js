(function() {
  'use strict';
  var gulp = require('gulp');
  var stylus = require('gulp-stylus');
  var prefix = require('gulp-autoprefixer');
  var minify = require('gulp-minify-css');
  var rename = require('gulp-rename');

  gulp.task('compile', function() {
    return gulp.src('./assets/css/familysearch-styles.styl')
                .pipe(stylus())
                .pipe(prefix({
                  browsers: ['chrome 42', 'IE 10', 'Firefox 37', 'Safari 7.1']
                }))
                .pipe(gulp.dest('./dist'))
                .pipe(minify())
                .pipe(rename(function(path) {
                path.extname = '.min' + path.extname;
                  return path;
                }))
                .pipe(gulp.dest('./dist'));
  })

  gulp.task('default', ['compile'], function() {
    gulp.watch('./assets/**/*', ['compile']);
  });
})();