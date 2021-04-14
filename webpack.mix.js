const mix = require('laravel-mix');
const fs = require('fs');

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
  .sass('resources/sass/app.scss', 'public/css') // Laravel default login page style
  .then((stats) => {
    let preload = [];
    for (let file of Object.keys(stats.compilation.assets)) {
      if (file.indexOf("ttf") === -1) {
        continue;
      }
      preload.push(`<link rel="preload" href="{{ asset('${file}') }}" as="font" crossorigin/>`);
    }
    fs.writeFileSync("resources/views/includes/css.blade.php", preload.join("\n"));
  });