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

gulp.task('clean', function(){
    del([
    'build/**',
    '!build']);
});

gulp.task('scripts', function(){
    return gulp.src(['dev/assets/js/*.js','dev/**/**/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('build/js'));
});

gulp.task('usemin', function(){
    return gulp.src('dev/*.html')
    .pipe(usemin({
        css: [minifyCss(), 'concat'],
        html: [minifyHtml({empty:true})],
        js: [uglify()]
    }))
    .pipe(gulp.dest('build/'));
})

gulp.task('index', function(){
    var target = gulp.src('build/index.html')
    var sources = gulp.src(['build/**/*.js','build/**/*.css'], {read: false});
    return target.pipe(inject(sources))
    .pipe(gulp.dest('build/'));
});

gulp.task('minify-css', function(){
    return gulp.src('dev/**/**/*.css')
    .pipe(concat('compiled.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});

gulp.task('sass', function(){
    gulp.src('dev/**/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dev'));
});

gulp.task('sass:watch', function () {
  gulp.watch('dev/**/**/*.scss', ['sass']);
});

gulp.task('build', ['clean', 'sass','usemin']);