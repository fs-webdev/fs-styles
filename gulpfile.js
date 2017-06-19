var gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var size = require('gulp-size');
var insert = require('gulp-insert');
var plumber = require('gulp-plumber');
var package = require('./package.json');

var header = '/*\n' +
             ' * FamilySearch Styles\n' +
             ' * https://github.com/fs-webdev/fs-styles\n' +
             ' * v' + package.version + ' | MIT\n' +
             ' */\n';

gulp.task('build', function() {
  return gulp.src(['assets/css/familysearch-styles.styl', 'assets/css/base.styl'])
    .pipe(plumber())
    .pipe(stylus())
    .pipe(insert.prepend(header))
    .pipe(gulp.dest('dist'))
    .pipe(cleanCSS())
    .pipe(insert.prepend(header))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(size())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  gulp.watch('assets/**/*.styl', ['build']);
});

gulp.task('default', ['build', 'watch']);