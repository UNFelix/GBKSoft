global.$ = {
  gulp: require('gulp'),
  gulpAutoprefixer: require('gulp-autoprefixer'),
  gulpBabel: require('gulp-babel'),
  gulpCheerio: require('gulp-cheerio'),
  gulpConcat: require('gulp-concat'),
  gulpCsso: require('gulp-csso'),
  gulpImagemin: require('gulp-imagemin'),
  gulpGroupCssMediaQueries: require('gulp-group-css-media-queries'),
  gulpLess: require('gulp-less'),
  gulpPlumber: require('gulp-plumber'),
  gulpRename: require('gulp-rename'),
  gulpReplace: require('gulp-replace'),
  gulpSourcemaps: require('gulp-sourcemaps'),
  gulpSvgSprite: require('gulp-svg-sprite'),
  gulpSvgmin: require('gulp-svgmin'),
  gulpUglify: require('gulp-uglify'),
  gulpWebp: require('gulp-webp'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  imageminPngquant: require('imagemin-pngquant'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  babel: require('gulp-babel'),
  path: {
    config: require('./gulp/config'),
    jquery: './js/jquery-2.2.3.min.js',
    tabs: './js/jquery-ui.js',
    owlCarousel: './js/owl.carousel.js',
    select2: './js/select2.min.js',
    js: './js/script.js',
    jsForm: './js/scriptForm.js',
    // js: './js/**/*.js',
  }
};

$.path.config.forEach(function (path) {
  require(path)();
});
