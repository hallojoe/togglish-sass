'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
  
gulp.task('default', ['sass', 'sass:watch'], function () { });
  
gulp.task('sass', function () {
  return gulp.src('./src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});