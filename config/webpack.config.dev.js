
/*
todo:
- configure sass linting
- configure eslint
*/

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    filename: 'static/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('autoprefixer')(),
                  require('cssnano')()
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: 'static/[name].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../index.html'),
    }),
  ]
}

module.exports = config;
