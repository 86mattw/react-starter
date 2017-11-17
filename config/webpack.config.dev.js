
/*
todo:
- handle sass
- configure sass linting
- configure eslint
- extract css and make sure links are injected into template
*/

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcDir  = path.resolve(__dirname, '../src/js');
const buildDir = path.resolve(__dirname, '../build');

const config = {
  context: srcDir,
  entry: {
    app: './index.js'
  },
  output: {
    path: buildDir,
    publicPath: '/',
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin([buildDir], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../index.html'),
    }),
  ]
}

module.exports = config;
