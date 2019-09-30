const { series, parallel, watch, src, dest } = require('gulp');
const browserSync = require('browser-sync').create();

const clean = require('gulp-clean');

const rename = require('gulp-rename');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass');
sass.compiler = require('node-sass')

function serve() {
    browserSync.init({
		server: './',
		port: 5000
	});
}

function buildStyles() {
	return src('styles/index.scss')
		.pipe(sass())
		.pipe(rename({ basename: 'styles' }))
		.pipe(dest('./'));
}

function buildMarkup() {
	return src('markup/index.html')
		.pipe(nunjucks.compile())
		.pipe(dest('./'));
}

function defaultTask(cb) {
	parallel(buildStyles, buildMarkup)();
	cb();
}



exports.build = series(defaultTask);
exports.dev = defaultTask;
exports.serve = () => {
	serve();
	watch("markup/**/*.html", buildMarkup).on('change', browserSync.reload);
	watch("styles/**/*.scss", buildStyles).on('change', browserSync.reload);
};

exports.default = defaultTask;