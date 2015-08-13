var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');

gulp.task('scripts', function(){
    return gulp.src(['public/js/*.js','public/js/**/*.js', '!public/js/controllers/testCtrl.js'])
    .pipe(concat('trip.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('public/js'));
});

gulp.task('index', function(){
    var target = gulp.src('index.html')
    var sources = gulp.src(['public/js/*.min.js','public/css/trip.css'], {read: false}, {ignorePath: '/public/'});
    return target.pipe(inject(sources))
    .pipe(gulp.dest('public/'));
});

gulp.task('minify-css', function(){
    return gulp.src('public/css/*.css')
    .pipe(concat('trip.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass', function(){
    gulp.src('public/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('public/css/**/*.scss', ['sass']);
});

gulp.task('build', ['sass','minify-css', 'scripts', 'index']);
