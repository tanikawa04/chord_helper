'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import plumber from 'gulp-plumber';

import webpackConfig from './webpack.config';

gulp.task('webpack', () => {
	gulp.src('./src/*.js')
		.pipe(plumber())
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
	gulp.watch('./src/*.js', ['webpack']);
});

gulp.task('default', ['webpack']);
