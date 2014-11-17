var fs = require('fs'),
    gulp = require('gulp'),
    concat = require('gulp-concat');

/**
 * Build vendor, Concat and build our dependencies
 */
module.exports = function () {

    var appDepenpendencies = './src/vendor';

    return gulp.src([
        appDepenpendencies + '/angular/angular.min.js',
        appDepenpendencies + '/angular-animate/angular-animate.min.js',
        appDepenpendencies + '/angular-sanitize/angular-sanitize.min.js',
        appDepenpendencies + '/angular-touch/angular-touch.min.js',
        appDepenpendencies + '/angular-ui-router/release/angular-ui-router.min.js',
        appDepenpendencies + '/moment/moment.js',
        appDepenpendencies + '/kiwapp-manager-api/bundle.js',
        appDepenpendencies + '/pace/pace.min.js'
    ])
        .pipe(concat('vendor.min.js', {newLine: ';'}))
        .pipe(gulp.dest('build/js'));

};