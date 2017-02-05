var gulp = require("gulp"),
      jquery = require("jquery"),
      connect =  require ("gulp-connect"),
      historyApiFallback = require ("connect-history-api-fallback");

// Servidor Web
gulp.task('servidor', function() {
	connect.server({
		root: './',
		hostname: '0.0.0.0',
		port: '8082',
		livereload: true,
		middleware: function( connect, opt ) {
			return [ historyApiFallback({})];
		}
	});
});


// Tarea cambios HTML
gulp.task('html', function() {
	gulp.src('./*.html')
	.pipe(connect.reload());
}); 

//Tarea cambio CSS
gulp.task('css', function() {
	gulp.src('./css/*.css')
	.pipe(connect.reload());
});

// Tarea cambios main.js
gulp.task( 'js', function() {
	gulp.src('./js/*.js')
	.pipe(connect.reload());
});

//Tarea que vigila todos los cambios
gulp.task('watch', function() {
	gulp.watch( [ './*.html' ], [ 'html' ] );
	gulp.watch( [ './css/*.css' ], [ 'css' ]);
	gulp.watch( [ './js/*.js' ], [ 'js' ] );
});

//Tarea default, iniciada por gulp
gulp.task( 'default', 
	['servidor', 'watch'] 
);




