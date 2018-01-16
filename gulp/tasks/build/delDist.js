'use srtict';
module.exports = function() {
    $.gulp.task('delDist', ()=>{
        return $.del('./docs');
    });
};