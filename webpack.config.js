const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}
