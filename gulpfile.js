let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let stylus = require('gulp-stylus');
let size = require('gulp-size');
let insert = require('gulp-insert');
let plumber = require('gulp-plumber');

let header = '/*\n' +
             ' * FamilySearch Styles\n' +
             ' * https://github.com/fs-webdev/fs-styles\n' +
             ' * v' + require('./package.json').version + ' | MIT\n' +
             ' */\n';

gulp.task('build', function() {
  return gulp.src('assets/css/familysearch-styles.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(insert.prepend(header))
    .pipe(gulp.dest('dist'))
    .pipe(cleanCSS())
    .pipe(insert.prepend(header))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(size({
      gzip: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(rename('fs-styles.html'))
    .pipe(insert.prepend(`<dom-module id="fs-styles">
  <template>
    <style>\n`))
    .pipe(insert.append(`\n    </style>
  </tempalte>
</dom-module>`))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('assets/**/*.styl', ['build']);
});

gulp.task('default', ['build', 'watch']);