var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var simpleVars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var browserSync = require("browser-sync").create();

gulp.task("default", function () {
  console.log("HURRAYYYY");
});

gulp.task("html", function() {
  console.log("Something useful here");
});


// STYLES

gulp.task("styles", function() {
  console.log("Something useful for CSS here");
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, simpleVars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function () {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function () {
    gulp.start("html");
    browserSync.reload()
  });

  watch("./app/assets/styles/**/*.css", function () {
    gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"], function () { //second argument runs any dependency tasks so were able to change on line 42
  return gulp.src("./app/temp/styles/styles.css")
  .pipe(browserSync.stream());
});