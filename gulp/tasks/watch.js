var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: true, //oben rechts kleiner hinweis was passiert ist
        server: { baseDir: "app" }
    });


    watch('./app/index.html', function() {
        browserSync.reload();
    });

    watch('./app/assets/css/**/*.css', function() {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['cssstyles'], function() {
    return gulp.src('./app/temp/css').pipe(browserSync.stream());
});