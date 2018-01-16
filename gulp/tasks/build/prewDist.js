'use srtict';
module.exports = function() {
    $.gulp.task('prewDist', ()=> {
        $.browserSync.init({
            notify: false,
            server: {
                baseDir: "docs"
            }
        });
    });
};