var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('watch', function () {
  return gulp.src('scss/*.scss')
    .pipe(watch('scss/*.scss'))
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('build', function() {
  gulp.src('vendor/twbs/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('css'));
  gulp.src('vendor/fortawesome/font-awesome/**')
    .pipe(gulp.dest('css/font-awesome'));
});

// Note: https://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc

//
// gulp.task('styles', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });
