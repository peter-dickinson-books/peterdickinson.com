var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var merge = require('merge-stream');
var touch = require('gulp-touch');

gulp.task('js', function(){
  return gulp.src('./js/**/*.js')
    .pipe(gulp.dest('./static/js'))
});

gulp.task('fontawesome', function() {
  var css = gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('./static/css'));
  var fonts = gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./static/fonts'));
  return merge(css, fonts)
});

gulp.task('sass', function(){
  touch('./sass/main.scss');
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./static/css'));
});

gulp.task('css', gulp.series('sass', 'fontawesome'))

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('build', gulp.series('js', 'css'));
gulp.task('default', gulp.series('build', 'watch'));
