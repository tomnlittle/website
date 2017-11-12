const webpack       = require('webpack');
const path          = require('path');

const ENV = process.env.NODE_ENV;
const isDevMode = ENV === 'development' ? true : false;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    "./app/app.js",
    "./app/index.html"
  ],

  // Resolves more than just js files
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.html']
  },

  devServer : {
    contentBase: './dist',
    hot: true
  },

  // Rules for building
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        loaders: "babel-loader",
        query: {
          presets: ['env','react']
        }
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ]
  },
 
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },

  // Plugins for additional post processing functionality
  plugins: [
    //Minimises the output javascript
    //new webpack.optimize.UglifyJsPlugin(),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};