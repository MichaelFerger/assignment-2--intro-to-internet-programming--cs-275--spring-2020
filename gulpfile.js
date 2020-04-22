const { src, dest, series, watch } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
