// import {src, dest, watch, series} from 'gulp'
// import * as dartSass from 'sass'
// import gulpSass from 'gulp-sass'

// const sass = gulpSass(dartSass)

// export function js( done ){
//     src('src/js/app.js')
//         .pipe( dest('build/js'))

//     done()
// }

// export function css( done ) {
//     src('src/scss/app.scss', {sourcemaps: true})
//         .pipe( sass().on('error', sass.logError) )
//         .pipe( dest('build/css', {sourcemaps: true}))

//     done()
// }
 
// export function dev() {
//     watch('src/scss/**/*.scss', css)
//     watch('src/js/**/*.js', js)
// }

// // Definir la tarea "build"
// export const build = series(js, css);

// // Tarea por defecto
// export default series(js, css, dev);

import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

// Mover archivos HTML a dist
export function html(done) {
    src('*.html')
        .pipe(dest('dist'));
    done();
}

// Compilar JS
export function js(done) {
    src('src/js/app.js')
        .pipe(dest('dist/js'));
    done();
}

// Compilar SCSS
export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css', { sourcemaps: '.' }));
    done();
}

// Dev
export function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
    watch('./*.html', html);
}

// Build
export const build = series(html, js, css);
export default series(html, js, css, dev);
