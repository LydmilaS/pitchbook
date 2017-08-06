'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('make-js', function() {
    return gulp.src('./source/js/*.js')
        .pipe(sourcemaps.init())
            .pipe(concat('all.min.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('make-css', function() {
    return gulp.src( './source/less/index.less')
        .pipe(less())
        .pipe(sourcemaps.init())
            .pipe(concat('style.min.css'))
            .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch',  watchTask);
function watchTask() {
    return gulp.watch('./source/less/includes/*.less', gulp.series(
        'make-css'
    ));
}
