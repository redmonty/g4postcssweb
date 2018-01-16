
'use srtict';
module.exports = function() {
    $.gulp.task('modernizr', ()=> {
        return $.gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
            .pipe($.gp.modernizr({
                'options': [
                    'setClasses'
                ]
            }))
            .pipe($.gulp.dest('./app/temp/scripts/'));
    });
};
