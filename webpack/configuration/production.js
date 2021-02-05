const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./common');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'application.js',
        publicPath: './',
        path: path.resolve('dist'),
        chunkFilename: 'vendor-[id]-[contenthash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
});
