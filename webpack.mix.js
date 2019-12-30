const mix = require('laravel-mix');

const paths = {
    src: './src',
    dist: './dist',
};

mix.webpackConfig({
    output: {
        library: 'reword',
        libraryTarget: 'umd',
    },
});

mix.ts(`${paths.src}/index.ts`, paths.dist);
