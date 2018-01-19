const fs = require('fs');
const gulp = require('gulp');
const less = require('gulp-less');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

const SOURCE_DIR = './src';
const DIST_DIR = './dist';

//less=>css
gulp.task('css', cssTask);

function(){
  return gulp.src(`${SOURCE_DIR}/css/main.less`)
  .pipe(less().on('error', (err) => {
    var displayErr = gutil.colors.red(err);
    gutil.log(displayErr);
    gutil.beep;
    this.emit(end);
  }))
}

//default task
gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('default task done');
  done();
}
