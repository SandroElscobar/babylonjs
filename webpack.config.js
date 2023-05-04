const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.babylon.js",
        clean: true
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devServer: {
        hot: true,
        open: true,
        devMiddleware: {
            writeToDisk: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({template: "index.html"}),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            'earcut': 'earcut'
        }),
    ]
}