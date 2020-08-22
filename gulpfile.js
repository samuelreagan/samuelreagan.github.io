const { src, dest, parallel, watch } = require('gulp');
 
const sass = require('gulp-dart-sass');
const minifyCSS = require('gulp-csso');
const pug = require('gulp-pug');

function css() {
  return src('./sass/styles.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./css'));
}

function watchSass() {
  return watch(['sass/*.scss'], css);
}

function runPug() {
  return src('./views/*.pug')
  .pipe(pug({
    doctype: 'html',
    pretty: false
  }))
  .pipe(dest('./views'))
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
exports.runPug = runPug;
exports.default = parallel(css);