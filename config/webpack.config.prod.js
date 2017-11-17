
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.dev');

const config = merge(devConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
});

module.exports = config;
