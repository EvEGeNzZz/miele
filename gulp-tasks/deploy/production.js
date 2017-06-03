var runSequence = require('run-sequence');
var GulpSSH = require('gulp-ssh');
var fs = require('fs');

module.exports = function(gulp, config) {
  return runSequence(
    'clean',
    'styles',
    'scripts',
    'pages',
    'images',
    'fonts',
    function() {
      ['app1.improvemedia.ru', 'app2.improvemedia.ru'].forEach(function(host) {
        var gulpSSH = new GulpSSH({
          ignoreErrors: false,
          sshConfig: {
            host: host,
            username: 'promo_imr',
            privateKey: fs.readFileSync('/Users/user/.ssh/id_rsa')
          }
        })

        gulp.src('./build/**/*')
          .pipe(gulpSSH.dest('/srv/miele.inmyroom.ru'))
      })
    }
  )
}
