const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent Api for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync('127.0.0.1:8000');

mix.js('resources/js/index.js', 'public/js').react()  // React
  .js('resources/js/layoutApp.js', 'public/js') // Laravel require JS
  .sass('resources/sass/app.scss', 'public/css'); // Laravel default login page style


