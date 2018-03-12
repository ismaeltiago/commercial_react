const webpack = require('webpack');
const merge = require('lodash/merge');
const common = require('./common');

const HtmlPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    ...common.entry
  ],

  output: Object.assign({}, common.output, {
    publicPath: ''
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),

    new HtmlPlugin(common.htmlPluginConfig('template-dev.html'))
  ],

  module: {
    // rules: [common.standardPreLoader, common.jsLoader, common.cssLoader]
    rules: [common.jsLoader, common.cssLoader]
  },

  resolve: common.resolve
});