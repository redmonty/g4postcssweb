'use srtict';
module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./app/assets/styles/**/*.css', $.gulp.series('styles'));
        $.gulp.watch('./app/assets/scripts/**/*.js', $.gulp.series('scripts'));
        // $.gulp.watch('./source/template/*.pug', $.gulp.series('pug'));
    });
};