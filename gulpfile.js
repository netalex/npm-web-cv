const fs = require('fs');
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
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

//
function cssTask(){
  return gulp.src(`${SOURCE_DIR}/css/main.less`)
  .pipe(less({
    paths:[
      '.',
      './node_modules/normalize.css.less',
      './src/css'
    ]
  }).on('error', (err) => {
    var displayErr = gutil.colors.red(err);
    gutil.log(displayErr);
    gutil.beep;
    this.emit(end);
  }))
  .pipe(postcss([autoprefixer({browsers: ['last 2 version', 'Safari 8']})]))
  .pipe(gulp.dest(`${DIST_DIR}/css/`))
  .pipe(browserSync.stream());
  done();
};

//default task
gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('default task done');
  done();
};

/*
1. 
*/
