var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css:{
            variables: {
                replaceSvgWithPng: function() {
                    return function(sprite,render) {
                        return render(sprite).split('.svg').join('.png');
                    };
                }
            },
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};
module.exports = function() {
    $.gulp.task('sprite',$.gulp.series(
        'cleanSprite',
        'createSprite',
        'pngCopy',
        'copySpriteGraph',
        'copySpritecss'
        // 'endClean'
    ));
};
$.gulp.task('cleanSprite', function(){
    return $.del(['./app/temp/sprite','./app/assets/images/sprites']);
});
// $.gulp.task('endClean',['copySpriteGraph','copySpritecss'], function(){
//     return $.del('./app/temp/sprite');
// });
$.gulp.task('createSprite', function(){
    return $.gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe($.gp.svgSprite(config))
        .pipe($.gulp.dest('./app/temp/sprite/'));
});
$.gulp.task('pngCopy', function(){
    return $.gulp.src('./app/temp/sprite/css/*.svg')
        .pipe($.gp.raster())
        .pipe($.gp.rename({extname: '.png'}))
        .pipe($.gulp.dest('./app/temp/sprite/css'));
});
$.gulp.task('copySpriteGraph', function(){
    return $.gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
        .pipe($.gulp.dest('./app/assets/images/sprites'));
});
 
$.gulp.task('copySpritecss',function(){
    return $.gulp.src('./app/temp/sprite/css/*.css')
        .pipe($.gp.rename('_sprite.css'))
        .pipe($.gulp.dest('./app/assets/styles/modules'));
});

// gulp.task('icons',['clean', 'createSprite', 'pngCopy', 'copySpriteGraph', 'copySpritecss', 'endClean']);