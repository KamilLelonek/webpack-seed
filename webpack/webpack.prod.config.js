const config            = require("./webpack.config.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const prodConfig = {
  devtool: "source-map",
  entry:   config.entry,
  resolve: config.resolve,
  output:  config.output,
  postcss: config.postcss,

  plugins: [
    new ExtractTextPlugin("styles.css"),
  ].concat(config.plugins),

  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss"),
      },
    ].concat(config.module.loaders),
  },
};

module.exports = prodConfig;
