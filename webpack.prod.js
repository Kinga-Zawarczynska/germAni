const path = require('path'),
    common = require('./webpack.common'),
    merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'bundle.[contentHash].js',
        path: path.resolve(__dirname, 'public'),
    },
});
