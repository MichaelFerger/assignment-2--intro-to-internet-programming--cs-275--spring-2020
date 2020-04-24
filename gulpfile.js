const { src, dest, series, watch } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const cleanCSS = require(`gulp-clean-css`);

const browserSync = require(`browser-sync`);
const reload = browserSync.reload;





let compressHTML = () => {
    return src([`dev/html/*.html`,`dev/html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let validateHTML = () => {
    return src([
        `dev/html/*.html`,
        `dev/html/**/*.html`])
        .pipe(htmlValidator());
};

let compileCSSForDev = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({}))
        .pipe(dest(`temp/css`));
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
exports.compileCSSForProd = compileCSSForProd;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.lintJS = lintJS;
