const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.min.css');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|mp3)/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            },
        ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // plugin for controlling how compiled css will be outputted and named
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
    ],
};