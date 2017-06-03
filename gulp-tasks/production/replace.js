var revReplace = require('gulp-rev-replace');
var opt = {
  distFolder: 'build',
  srcFolder: './build'
};

module.exports = function(gulp) {
  var manifest = gulp.src("./" + opt.distFolder + "/rev-manifest.json");

  return gulp.src(opt.srcFolder + "/index.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(opt.distFolder));
}
