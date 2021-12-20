module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'fonts/**/*.{woff,otf,ttf,eot,svg}',
      'img/**',
      'video/**',
      '*.html',
      '*.ico',
      'intlTel/**/**',
    ], {
      base: '.',
    })
      .pipe($.gulp.dest('build'));
  });
};
