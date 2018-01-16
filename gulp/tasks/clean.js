'use srtict';
module.exports = function() {
    $.gulp.task('clean', function() {
        return $.del([
            'temp'
        ]);
    });
};