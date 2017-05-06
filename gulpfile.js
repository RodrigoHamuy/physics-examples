var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-reload', function () {
    browserSync.reload();
});
 gulp.task('browser-sync', ['browser-reload'], function() {
   browserSync({
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
