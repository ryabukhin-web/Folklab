const { src, dest, watch, parallel, series } = require('gulp');

const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync').create();
const uglify        = require('gulp-uglify-es').default;
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const del           = require('del');

function browsersync() {
    browserSync.init({
        server : {
            baseDir: 'Folklab_LK/.'
        }

    });
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'js/jquery.fancybox.min.js',
        'js/swiper.min.js',
        'js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src([
        //'node_modules/normalize.css/normalize.css',
        'Folklab_LK/fonts/**/*.css',
        'Folklab_LK/sass/base.sass'
    ])
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(concat('Folklab_LK/style.css'))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 15 version'],
                grid: true
            }))
            .pipe(dest('.'))
            .pipe(browserSync.stream())
}

function watching() {
    watch(['Folklab_LK/sass/**/*.sass', 'Folklab_LK/fonts/**/*.css'], styles);
    watch(['Folklab_LK/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;

exports.default = parallel(browsersync, watching);