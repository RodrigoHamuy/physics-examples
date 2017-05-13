var gulp        = require('gulp');
var browserSync = require('browser-sync');
var devip = require('dev-ip');

gulp.task('browser-reload', function () {
    browserSync.reload();
});
 gulp.task('browser-sync', ['browser-reload'], function() {
   browserSync({
     host: devip()[devip().length-1],
     server: {
       baseDir: './'
     },
     port: 3010,
     ui: {
       port: 3011
     }
   });
});
gulp.task('watch', function () {
    gulp.watch(['./**', '!./node_modules/**'], ['browser-reload']);
});
gulp.task('default', ['browser-sync', 'watch']);
