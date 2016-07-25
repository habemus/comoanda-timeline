const gulp = require('gulp');
const gulpLess = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('./styles/main.less')
    .pipe(gulpLess({}))
    .pipe(gulp.dest('./styles'));
});