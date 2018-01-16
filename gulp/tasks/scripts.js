'use srtict';
module.exports = function() {
    $.gulp.task('scripts', $.gulp.series(
        'webpack',
        'minJS'
    ));
};
$.gulp.task('webpack', (callback)=> {
    $.webpack(require('../../webpack.config.js'), (err,stats)=>{
        if(err) {
            console.log(err.toString());
        }
        console.log('webpack completed!Scripts changed! Be happy!');
        console.log(stats.toString());
        callback(); 
    });
});
$.gulp.task('minJS',function(){
    $.gp.uglify()
    return $.gulp.src('./app/temp/scripts/App.js')
        .pipe($.gp.uglify())
        .pipe($.gp.rename({
            suffix: ".min"
        }))
        .pipe($.gulp.dest('./app/temp/scripts'));
});