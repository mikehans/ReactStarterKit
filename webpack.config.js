/* eslint "@typescript-eslint/no-var-requires": "off" */
/*
    eslint: turning off this no-var-requires is just to get it working right now.
    TBD: Remove and update code
*/
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
        library: 'MH'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json' ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|jsx|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: 3003,
        //     server: {baseDir: ['public']}
        // })
    ]
};
