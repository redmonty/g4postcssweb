'use srtict';
module.exports = function() {
    $.gulp.task('html', ()=>{
        return $.gulp.src('./app/**/*.html')
            .pipe($.gp.htmlhint())
            .pipe($.gp.htmlmin({collapseWhitespace: true}))
            .pipe($.gulp.dest('./docs'));
    });
};