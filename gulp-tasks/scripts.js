const { dest, src } = require("gulp");

// Grabs all js files
// and plops them in the dist folder
const scripts = () => {
    return src("./src/js/**/*.js").pipe(dest("./dist/js"));
};

module.exports = scripts;
