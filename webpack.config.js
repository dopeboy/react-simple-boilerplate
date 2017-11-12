const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      use: 'babel-loader',
    }, {
      test: /\.(css)$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
