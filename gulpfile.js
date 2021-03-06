var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var compass = require('gulp-compass');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var extender = require('gulp-html-extend');

// image
gulp.task('clean-images', function() {
    return gulp.src('build/assets/images/*', {
            read: false
        })
        .pipe(clean());
});
gulp.task('images', ['clean-images'], function() {
    return gulp.src('src/assets/images/**/*')
        .pipe(gulp.dest('build/assets/images/'));
});


// js
gulp.task('clean-js', function() {
    return gulp.src('build/assets/js/*', {
            read: false
        })
        .pipe(clean());
});
gulp.task('concat-js', function() {
    return gulp.src(['src/assets/js/plugins/*.js'])
        .pipe(gulp.dest('build/assets/js/plugins/'));
});

gulp.task('js', ['clean-js', 'concat-js'], function() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/assets/js/'));
});

// HTML
gulp.task('clean-html', function() {
    return gulp.src('build/*.html', {
            read: false
        })
        .pipe(clean());
});

gulp.task('html', ['clean-html'], function() {
    gulp.src('src/views/application/*.html')
        .pipe(extender({
            annotations: false,
            verbose: false
        }))
        .pipe(gulp.dest('build/'))
})

// 監聽檔案
gulp.task('watch', function() {
    gulp.watch('src/assets/js/**', ['js']);
    gulp.watch('src/assets/js/**/**', ['js']);
    gulp.watch('src/assets/images/**', ['images']);
    gulp.watch('src/views/**/*', ['html']);
});

// 本機伺服器
gulp.task('webserver', function() {
    gulp.src('build/')
        .pipe(webserver({
            // host: '0.0.0.0',
            port: 8080,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: '/index.html'
        }));
});

gulp.task('default', ['html', 'js', 'images'], function() {
    gulp.start('webserver');
    gulp.start('watch');
});