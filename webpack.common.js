/* eslint "@typescript-eslint/no-var-requires": "off" */
/*
    eslint: turning off this no-var-requires is just to get it working right now.
    TBD: Remove and update code
*/
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.join(__dirname, '../src/index'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
}

module.exports = config;
