'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('watch', function(){
    gulp.watch('./source/less/includes/*.less')
        .on('change', function(file) {
            gulp
            gulp.src('./source/less/index.less')  // only compile the entry file
                .pipe(less())
                .pipe(gulp.dest('./assets/css'))
        })

});

gulp.task('make-scripts', function() {
    return gulp.src('./source/js/*.js')
        .pipe(sourcemaps.init())
            .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('make-css', function() {
    return gulp.src(['./assets/css/normalize.css', './assets/css/index.css'])
        .pipe(sourcemaps.init())
            .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(csso())
        .pipe(gulp.dest('./assets/css'));
});
