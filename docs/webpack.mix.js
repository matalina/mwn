let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
mix.sass('src/sass/app.scss', 'assets/css')

mix.js('src/js/timeline.js', 'assets/js')
   .sass('src/sass/timeline.scss', 'assets/css');
   
mix.js('src/js/editor.js', 'assets/js')
   .sass('src/sass/editor.scss', 'assets/css')
