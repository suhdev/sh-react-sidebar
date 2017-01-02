const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    debug = true;

gulp.task('sass:dev',()=>{
    gulp.src(['./sass/sidebar.scss'])
        .pipe(sass({
            sourceMap:false,
            omitSourceMapUrl:false,
            outFile:'sidebar.css',
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:production',()=>{
    gulp.src(['./sass/sidebar.scss'])
        .pipe(sass({
            sourceMap:false,

            omitSourceMapUrl:false,
            outputStyle:'compressed',
            outFile:'sidebar.min.css',
        }).on('error', sass.logError))
        .pipe(rename('sidebar.min.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js:production',()=>{
    gulp.src('./dist/sidebar.js')
        .pipe(uglify({
            mangle:true,
        }))
        .pipe(rename('sidebar.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js:watch',['js:production'],()=>{
    gulp.watch('./dist/sidebar.js',['js:production']);
});

gulp.task('sass:watch',['sass:dev','sass:production'],()=>{
    gulp.watch(['./sass/*.scss'],['sass:dev','sass:production']);
});


gulp.task('default',['sass:watch','js:watch'],()=>{
    
});
