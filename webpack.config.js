const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/App.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
      },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use :{
                loader:'babel-loader'
            },
        },
        {
          test: /scss$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
        }],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    }
}