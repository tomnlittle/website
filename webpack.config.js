const path = require('path');

module.exports = {
  context: __dirname + '/src',

  entry: {
    javascript: "./app/app.js",
    html: "./index.html"
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader/webpack", 'babel-loader?presets[]=react'],
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ]
  },
 
  output: {
    filename: "[name].js",
    path: __dirname + "/build",
  }
};