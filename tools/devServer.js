import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import browserSyncConfig from '../bs-config';

const compiler = webpack(webpackConfig);
browserSync({
    ...browserSyncConfig,
    middleware: [
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        }),
        webpackHotMiddleware(compiler)
    ]
});
