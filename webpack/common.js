const path = require('path');

module.exports = {
  entry: [ path.join(__dirname, '..', 'src', 'index') ],

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: (template) => ({
    title: 'React app',
    template: path.join(__dirname, '..', 'src', 'html', template)
  }),

// packages
// "standard": "^11.0.0",
// "standard-loader": "^6.0.1",
// semi collon
  // standardPreLoader: {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   include: /src/,
  //   loader: 'standard-loader'
  // },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: /src/,
    loaders: ['style', 'css']
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components'),
      // utils: path.join(__dirname, '..', 'src', 'utils')
    }
  }
};