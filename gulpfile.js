var gulp = require('gulp');

var sass = require('gulp-sass');

var mix = require('mix');

var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('sass', function(){
    return gulp.src('app/sass/styles.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css/'))
});

gulp.task('main-bower-files', function() {
    return gulp.src('bower_components/foundation/css')
        .pipe(mainBowerFiles())
    .pipe(gulp.dest('app/css'));
});


gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.scss', ['sass']);
    // Other watchers
})