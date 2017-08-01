'use strict';

var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('watch', function(){
    gulp.watch('./source/includes/*.less')
        .on('change', function(file) {
            gulp
            gulp.src('./source/index.less')  // only compile the entry file
                .pipe(less())
                .pipe(gulp.dest('./assets/css'))
        })

});
