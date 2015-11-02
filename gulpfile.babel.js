'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import filter from 'gulp-filter';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import snakeparser from 'gulp-snakeparser';
import runSequence from 'run-sequence';
import plumber from 'gulp-plumber';

import webpackConfig from './webpack.config';

gulp.task('webpack', () => {
    gulp.src('./src/*.js')
        .pipe(plumber())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist/'))
        .pipe(filter('**/*.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('generate-parser', () => {
    gulp.src('./src/grammer/*.sg')
        .pipe(plumber())
        .pipe(snakeparser())
        .pipe(gulp.dest('./src/'));
});

gulp.task('snakeparser', callback => {
    runSequence(
        'generate-parser',
        'webpack',
        callback
    );
});

gulp.task('watch', () => {
    gulp.watch('./src/*.js', ['webpack']);
    gulp.watch('./src/grammer/*.sg', ['snakeparser']);
});

gulp.task('default', ['webpack']);
