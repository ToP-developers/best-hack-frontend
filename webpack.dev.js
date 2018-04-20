const Webpack = require('webpack');
const Merge = require('webpack-merge');

const common = require('./webpack/webpack.common.js');

module.exports = Merge(common, {
  watch: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.spec\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'es2015', 'react'],
          cacheDirectory: true
        }
      }
    ]
  }
});
