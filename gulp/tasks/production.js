'use srtict';
module.exports = function() {
    $.gulp.task('build', $.gulp.series(
        'delDist',
        'copyGenFiles',
        'buildScripts',
        'buildCss',
        'buildhtml',
        'optimizeImages'
    ));
};
$.gulp.task('delDist', ()=>{
    return $.del('./docs');
});
$.gulp.task('copyGenFiles', ()=>{ 
    var pathToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];
    return $.gulp.src(pathToCopy )
        .pipe($.gulp.dest('./docs'));
});
$.gulp.task('buildhtml', ()=>{
    return $.gulp.src('./app/**/*.html')
        .pipe($.gp.htmlhint())
        .pipe($.gp.htmlmin({collapseWhitespace: true}))
        .pipe($.gulp.dest('./docs'));
});
$.gulp.task('optimizeImages', ()=> {
    return $.gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe($.gp.imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe($.gulp.dest('./docs/assets/images'));
});

$.gulp.task('prewDist', ()=> {
    $.browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});