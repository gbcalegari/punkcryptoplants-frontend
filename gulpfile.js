// gulpfile.js
const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");
var cssimport = require("gulp-cssimport");
const cleanCSS = require('gulp-clean-css');

var options = {
    matchPattern: "*.css"
};

// Task for compiling our CSS files using PostCSS
function cssTask(cb) {
    return src("./assets/css/src/main.css") // read .css files from ./src/ folder
        .pipe(postcss())
        .pipe(cssimport(options)) // join all imports into one file
        .pipe(cleanCSS({compatibility: 'ie8'})) // minify css
        .pipe(dest("./assets/css")) // paste them in ./assets/css folder
        .pipe(browserSync.stream());
    cb();
}

// Serve from browserSync server
function browsersyncServe(cb) {
    browserSync.init({
        proxy: "localhost/clients/punk-crypto-plants/"
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
    watch("./*.html", series(cssTask, browsersyncReload));
    watch(["./assets/css/src/*.css"], series(cssTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(cssTask, browsersyncServe, watchTask);
exports.css = cssTask;