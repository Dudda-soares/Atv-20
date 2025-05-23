const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');

function style(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function js(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.js',
      'src/scripts/**/*.js'])
    .pipe(terser())
    .pipe(gulp.dest('./dist/js'))
}



exports.default = gulp.parallel(style, js)
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(style))
    gulp.watch('./src/scripts/**/*js',gulp.parallel(js))

    

}