'use srtict';
module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src('./app/templates/*.pug')
            .pipe($.gp.pug({pretty: true}))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                }
            }))
            .pipe($.gulp.dest('./app/temp'));
    });
};