/* eslint "@typescript-eslint/no-var-requires": "off" */
/*
    eslint: turning off this no-var-requires is just to get it working right now.
    TBD: Remove and update code
*/
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    }
}

module.exports = merge(common, config);
