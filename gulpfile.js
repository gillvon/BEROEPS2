var gulp 		= require('gulp'),
	gutil 		= require('gulp-util'),
	uglify 		= require('gulp-uglify'),
	sass 		= require('gulp-ruby-sass'),
	prefix 		= require('gulp-autoprefixer'),
	plumber 	= require('gulp-plumber'),
	livereload 	= require('gulp-livereload');

/* 
* IF HTML CHANGES REFRESH
*/
gulp.task('content', function(){

	gulp.src(['dev/*.php', 'dev/*.html']).pipe(livereload());

});

/* 
* IF SASS CHANGES, COMPILE & COMPRESSED
*/
gulp.task('style', function(){

	sass('dev/sass/main.sass', {style: 'compact'})
	.on('error', sass.logError)
	.pipe(prefix())
	.pipe(plumber())
	.pipe(gulp.dest('dev/css/'))
	.pipe(livereload());

});

/*
* IF JAVASCRIPT/JQUERT CHANGES, COMPRES
*/
gulp.task('script', function(){

	gulp.src('dev/js/dev/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('dev/js/'))
	.pipe(livereload())

});


/* 
* CHECK FOR CHANGES 
*/
gulp.task('watch', function(){

	livereload.listen();

	gulp.watch(['dev/*.php', 'dev/*.html'], ['content']);
	gulp.watch('dev/sass/*.sass', ['style']);
	gulp.watch('dev/js/dev/*.js', ['script']);

});



gulp.task('default', ['content', 'style', 'script', 'watch']);