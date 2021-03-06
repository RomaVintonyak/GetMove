var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');

function css_style(done){
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'   //compresed option
      //outputStyle: 'expanded'   //uncompresed option
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
  done();
}
function js_minify(done){
  gulp.src('./js_src/**/*.js')
  .pipe(minify({
    errorLogToConsole: true,
    ext: {
        min: '.min.js'
    },
    ignoreFiles: ['-min.js']
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./js/'))
  done();
}
function Sync(done){
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}
function browserReload(done){
  browserSync.reload();
  done();
}
function watchFiles(){
  gulp.watch("./scss/**/*", css_style);
  gulp.watch("./**/*.html", browserReload);
  gulp.watch("./**/*.php", browserReload);
  gulp.watch("./js_src/*.js", js_minify);
  gulp.watch("./js/**/*.js", browserReload);
}
//gulp.task('default', css_style);
//gulp.task(start);
//exports.default = StartGulp;
//gulp.task('default', gulp.series(start, watchSass));

function moveFiles(){
  return gulp.src([
    './css/**/*',
    './img/**/*',
    './js/**/*',
    './pages/**/*',
    './php/**/*',
    './index.html'
  ]).pipe(gulp.dest('./app/'));
}
gulp.task(moveFiles);

gulp.task('default', gulp.parallel(Sync, watchFiles));
