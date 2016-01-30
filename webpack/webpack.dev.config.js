const webpack = require("webpack");
const config  = require("./webpack.config.js");

devConfig = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ].concat(config.entry),

  output:  Object.assign({}, config.output, { publicPath: "http://localhost:8080/" }),
  resolve: config.resolve,
  postcss: config.postcss,
  devtool: "eval",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ].concat(config.plugins),

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css?sourceMap!postcss" },
    ].concat(config.module.loaders),
  },
};

module.exports = devConfig;
