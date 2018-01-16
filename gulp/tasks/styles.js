'use srtict';
var cssvars = require('postcss-simple-vars'),//$variableName
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    rgba = require('postcss-hexrgba');
module.exports = function() {
    $.gulp.task('styles',$.gulp.series(
        'css',
        'minCss'
    ));
};
$.gulp.task('css',function(){
    console.info('CSS changed, have a nice day, you are the best!');
        return $.gulp.src('./app/assets/styles/styles.css')//take file and upgraid it with 
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.postcss([cssImport, mixins, cssvars, nested, rgba]))//postcss-simle-vars, postcss-nestet, autoprefixer
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 3 versions',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'Opera 12.1'
                ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./app/temp/styles'));//and create updaited css file in our directory
});
$.gulp.task('minCss', function() {
    return $.gulp.src('./app/temp/styles/styles.css')
        .pipe($.gp.cssnano())
        .pipe($.gp.rename({
            suffix: ".min"
        }))
        .pipe($.gulp.dest('./app/temp/styles'));
});

