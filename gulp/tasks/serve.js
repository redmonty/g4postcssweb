'use srtict';
module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            open: false,
            server: './app'
        });
        $.browserSync.watch('app', $.browserSync.reload);
    });
};