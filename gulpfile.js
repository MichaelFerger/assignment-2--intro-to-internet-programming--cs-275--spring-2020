const { src, dest, series, watch } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
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
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
