var gzip = require('gulp-gzip');
var rev = require('gulp-rev');

module.exports = function(gulp, config) {
  return gulp.src(['build/assets/*.css', 'assets/js/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('build/assets'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('build/assets'))
}
