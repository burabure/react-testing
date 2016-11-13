const path = require('path')
// const webpack = require('webpack')


module.exports = {
  devtool: 'cheap-source-map',
  entry: './app/index.jsx',
  resolve: {
    alias: {
      containers: path.join(__dirname, 'app', 'containers'),
      components: path.join(__dirname, 'app', 'components'),
      utils: path.join(__dirname, 'app', 'utils'),
    },

    extensions: [
      '', '.js', '.jsx',
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js',
    publicPath: '/js/',
  },
  module: {
    loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
}
