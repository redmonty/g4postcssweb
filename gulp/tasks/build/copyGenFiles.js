'use srtict';
module.exports = function() {
    $.gulp.task('copyGeneralFiles', ()=>{ 
        var pathToCopy = [
            './app/**/*',
            '!./app/index.html',
            '!./app/assets/images/**',
            '!./app/assets/styles/**',
            '!./app/assets/scripts/**',
            '!./app/temp',
            // '!./app/temp/**'
        ];
        return $.gulp.src(pathToCopy )
            .pipe($.gulp.dest('./docs'));
    });
};