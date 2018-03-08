var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var simpleVars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");

gulp.task("styles", function() {
  console.log("Something useful for CSS here");
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, simpleVars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});