const { src, dest, series, watch } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const cleanCSS = require(`gulp-clean-css`);
const cssLinter = require(`gulp-stylelint`);

const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let compressHTML = () => {
    return src([`dev/html/*.html`,`dev/html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let validateHTML = () => {
    return src([
        `html/*.html`,
        `html/*.html`])
        .pipe(htmlValidator());
};

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let compileCSSForDev = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({}))
        .pipe(dest(`temp/css`));
};

let compileCSSForProd = () => {
    return src(`dev/css/*.css`)
        .pipe(cleanCSS({compatibility: `ie8`}))
        .pipe(dest(`prod/css`));
};

let transpileJSForDev = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let transpileJSForProd = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));

};

watch(`dev/html/**/*.html`,
    series(validateHTML)
).on(`change`, reload);

watch(`dev/scripts/*.js`,
    series(lintJS, transpileJSForDev)
).on(`change`, reload);



exports.compressHTML = compressHTML;
exports.validateHTML = validateHTML;
exports.compileCSSForDev = compileCSSForDev;
exports.compileCSSForProd = compileCSSForProd;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
