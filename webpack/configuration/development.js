const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './src',
        watchContentBase: true,
        hot: true,
        inline: true
    }
});
