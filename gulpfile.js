const { src, dest, parallel, watch } = require('gulp');
 
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const minifyCSS = require('gulp-csso');

function css() {
  return src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./css'));
}

function watchSass() {
  return watch(['sass/*.scss'], css);
}

function lint() {
  return src('./sass/**/*.s+(c|a)ss')
    .pipe(sassLint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': true,
        rules: {
          'indentation': '2'
        }
      }
    }))
    .pipe(sassLint.failOnError());
}

exports.watchSass = watchSass;
exports.css = css;
exports.lint = lint;
exports.default = parallel(css);