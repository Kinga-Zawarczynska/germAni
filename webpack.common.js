const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            favicon: './src/images/favicon.png'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif|mp4)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets',
                    },
                },
            },
        ],
    },
};
