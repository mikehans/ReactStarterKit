import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);
browserSync({
    port: 3007,
    ui: {
        port: 3001
    },
    server: "src",
    watch: true,
    files: [
        'src/*.html',
        'src/*.ejs'
    ],
    middleware: [
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        }),
        webpackHotMiddleware(compiler)
    ]
});