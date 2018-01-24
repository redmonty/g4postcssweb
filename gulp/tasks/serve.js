'use srtict';
module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            open: false,
            server: './app/temp'
        });
        $.browserSync.watch('app/temp', $.browserSync.reload);
    });
};