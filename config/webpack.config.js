
const webpack = require('webpack');
const path = require('path');

const srcDir  = path.resolve(__dirname, '../src/js');
const distDir = path.resolve(__dirname, '../dist');

const config = {
  context: srcDir,
  entry: {
    app: './index.js'
  },
  output: {
    path: distDir,
    publicPath: '/',
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-module-source-map'
}

module.exports = config;
