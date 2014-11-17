var gulp = require('gulp'),
    concat = require('gulp-concat');

/**
 * Concat your dependencies (js or css)
 */
module.exports = function () {

    // Folder with all dependencies
    var appDepenpendencies = './src/vendor';

    // The css dependencies
    gulp.src(appDepenpendencies + '/bootstrap/dist/css/bootstrap.css')
        .pipe(gulp.dest('build/styles'));

    // The js dependencies
    return gulp.src([
        appDepenpendencies + '/angular/angular.min.js',
        appDepenpendencies + '/angular-animate/angular-animate.min.js',
        appDepenpendencies + '/angular-sanitize/angular-sanitize.min.js',
        appDepenpendencies + '/angular-touch/angular-touch.min.js',
        appDepenpendencies + '/angular-ui-router/release/angular-ui-router.min.js',
        appDepenpendencies + '/moment/moment.js',
        appDepenpendencies + '/kiwapp.js/kiwapp.js',
        appDepenpendencies + '/angular-bootstrap/ui-bootstrap-tpls.min.js'

    ])
        .pipe(concat('vendor.min.js', {newLine: ';'}))
        .pipe(gulp.dest('build/js'));

};