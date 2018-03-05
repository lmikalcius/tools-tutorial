var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function () {
  console.log("HURRAYYYY");
});

gulp.task("html", function() {
  console.log("Something useful here");
});

gulp.task("styles", function() {
  console.log("Something useful for CSS here");
});

gulp.task("watch", function () {
  watch("./app/index.html", function () {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function () {
    gulp.start("styles");
  });
});