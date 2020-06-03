const path = require('path'),
    common = require('./webpack.common'),
    merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'bundle.[contentHash].js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [new CleanWebpackPlugin()],
});
