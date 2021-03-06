var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('default', function() {
   
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './'
      },
    })
  });

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('build/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/scss/**/*.scss', ['sass']); 
    gulp.watch('./css/*.css', browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);
  });
