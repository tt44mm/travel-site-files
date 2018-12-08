var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');


gulp.task('cssstyles', function() {

    return gulp.src('./app/assets/css/style.css')
        .pipe(postcss([cssimport, mixins, nested, cssvars, hexrgba,autoprefixer]))
        .on('error',
            function(errorInfo) {
                console.log(errorInfo.toString());
                this.emit('end'); //nicht abbrechen sondern Ende und weiter zurückmelden
            })
        .pipe(gulp.dest('./app/temp/css'))
    console.log('postcss completed');
});