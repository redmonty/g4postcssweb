'use srtict';
module.exports = function() {
    $.gulp.task('optimizeImages', ()=> {
        return $.gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
            .pipe($.gp.imagemin({
                progressive: true,
                interlaced: true,
                multipass: true
            }))
            .pipe($.gulp.dest('./docs/assets/images'));
    });
};
