'use srtict';

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp : require('gulp'),//даст доступ с разных мест
    gp : require('gulp-load-plugins')(),
    del : require('del'),
    webpack : require('webpack'),
    browserSync : require('browser-sync').create()
};
$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});
$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'styles',
        'scripts',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
