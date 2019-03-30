const path = require('path');
const combinedLoaders = require('webpack-combine-loaders')
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
module.exports = {
  
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?/,
        exclude: /node_modules/,
        options: {
          presets:  ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: combinedLoaders([
         {
           loader: 'style-loader'
         }, {
           loader: 'css-loader',
           query: {
             modules: true,
             localIdentName: '[name]__[loader]__[hash:base64:5]'
           }
         }
       ])
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}