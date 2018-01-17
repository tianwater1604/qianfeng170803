var gulp = require("gulp");


//复制文件的任务
gulp.task("copy-index",function () {
    gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\web1708"));
});

gulp.task("watchall",function () {
    gulp.watch("*.html",["copy-index"]);
})