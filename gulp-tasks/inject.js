var gulp = require('gulp');
var inject = require('gulp-inject');

var transformFunc = function (filepath) {
    if (filepath.slice(-3) === '.js') {
        if (filepath.charAt(0) === '/') filepath = filepath.substr(1);
        return '<script data-main="' + filepath + '" src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.22/require.min.js"></script>';
    }
    if (filepath.slice(-4) === '.css') {
        if (filepath.charAt(0) === '/') filepath = filepath.substr(1);
        return '<link rel="stylesheet" href="' + filepath + '">';
    }
    // Use the default transform as fallback:
    return inject.transform.apply(inject.transform, arguments);
};

gulp.task('inject', ['css', 'requirejs'], function () {
    var builtFiles = gulp.src(['build/*', 'css/vendor-*.css','css/style-*.css']);

    return gulp.src('index.html')
        .pipe(inject(builtFiles, {
            transform: transformFunc
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('inject-css', ['css'], function () {
    var builtFiles = gulp.src(['./css/vendor-*.css','./css/style-*.css'], {read: false});

    return gulp.src('index.html')
        .pipe(inject(builtFiles, {
            transform: transformFunc
        }))
        .pipe(gulp.dest('./'));
});

