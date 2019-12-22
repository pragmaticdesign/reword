const mix = require('laravel-mix');

const paths = {
    src: './src',
    dist: './dist',
};

mix.ts(`${paths.src}/index.ts`, paths.dist);
