let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let stylus = require('gulp-stylus');
let size = require('gulp-size');
let insert = require('gulp-insert');
let plumber = require('gulp-plumber');
let merge = require('merge-stream');

let header = '/*\n' +
             ' * FamilySearch Styles\n' +
             ' * https://github.com/fs-webdev/fs-styles\n' +
             ' * v' + require('./package.json').version + ' | MIT\n' +
             ' */\n';

gulp.task('build', function() {

  let css = gulp.src('assets/css/familysearch-styles.styl')
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
    .pipe(gulp.dest('dist'));

    let styleModule = css.pipe(rename('fs-styles.html'))
                        .pipe(insert.prepend(`<dom-module id="fs-styles">
  <template>
    <style>\n`))
                        .pipe(insert.append(`
    </style>
  </template>
</dom-module>`))
                        .pipe(gulp.dest('.'));

    let esModule = css.pipe(rename('fs-styles.js'))
                      .pipe(insert.prepend(`import { html } from '@polymer/lit-element/lit-element.js';

export default html\`
<style>\n`))
                      .pipe(insert.append(`
</style>
\`;`))
                      .pipe(gulp.dest('.'));

    return merge(styleModule, esModule);
});

gulp.task('watch', function() {
  gulp.watch('assets/**/*.styl', ['build']);
});

gulp.task('default', ['build', 'watch']);
