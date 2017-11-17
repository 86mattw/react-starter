
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devConfig = require('./webpack.config.dev');

const config = merge(devConfig, {
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: process.cwd()
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
});

module.exports = config;
