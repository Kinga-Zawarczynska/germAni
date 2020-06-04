const path = require('path'),
    common = require('./webpack.common'),
    merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
});
