const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(css)$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': { 
        NODE_ENV: 'production',
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  );
}

module.exports = config;
