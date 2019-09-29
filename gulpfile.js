const { series, parallel, watch, src, dest } = require('gulp');

const clean = require('gulp-clean');

const rename = require('gulp-rename');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass');
sass.compiler = require('node-sass')

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
	watch(["styles/**/*.scss", "markup/**/*.html"], defaultTask);
};

exports.default = defaultTask;