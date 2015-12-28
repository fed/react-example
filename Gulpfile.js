const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
// const babelify = require('babelify');
const reactify = require('reactify');

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('html', () => {
  return gulp.src('src/{,**/}*.html')
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('css', () => {
  return gulp.src('src/css/app.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
  var bundler = watchify(browserify({
    entries: ['src/js/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  var build = function (file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist/js'));
  };

  build();
  bundler.on('update', build);
});

gulp.task('build', ['clean', 'html', 'css', 'js']);
gulp.task('default', ['build']);
