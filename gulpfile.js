const gulp         = require('gulp');
const uglify       = require('gulp-uglify');
const imagemin     = require('gulp-imagemin');
const babel        = require('gulp-babel');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const htmlmin      = require('gulp-htmlmin');
const concat       = require('gulp-concat');
const browserify   = require('browserify');
const babelify     = require('babelify');
const source       = require('vinyl-source-stream');
const buffer       = require('vinyl-buffer');

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['html', 'js', 'css', 'images']);

gulp.task('watch', () => {
  gulp.watch('resources/scripts/*.js', ['js']);
  gulp.watch('resources/scss/**/*.scss', ['css']);
  gulp.watch('resources/html/**/*.html', ['html']);
});

gulp.task('images', () => {
  gulp.src('public/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('public/img/'));
});

gulp.task('js', function () {
  return browserify({entries: 'resources/scripts/index.js', debug: true})
        .transform(babelify.configure({
          presets: ["es2015"]
        }))
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('css', () => {
  gulp.src('resources/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 6-8'] }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('public/css/'));
});

gulp.task('html', () => {
  gulp.src('resources/html/**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true, collapseInlineTagWhitespace: true, minifyCSS: true, minifyJS: true, removeComments: true }))
      .pipe(gulp.dest('public/'));
});
