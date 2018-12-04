var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');


gulp.task('default', function() {
    console.log('gulp working');
});

gulp.task('html', function() {
    console.log('html gulp doning something');
});


gulp.task('cssstyles', function() {

    return gulp.src('./app/assets/css/style.css')
        .pipe(postcss([nested, cssvars, autoprefixer]))
        .pipe(gulp.dest('./app/temp/css'))
    console.log('postcss completed');
});


gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/css/**/*.css', function() {
        gulp.start('cssstyles');
    });

});