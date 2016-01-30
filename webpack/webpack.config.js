const webpack           = require("webpack");
const path              = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: [
    path.resolve("src/index.ts"),
  ],

  output: {
    path:     path.resolve("build"),
    filename: "app-[hash].js",
  },

  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "app": path.resolve("src"),
    }
  },

  plugins: [
    new HTMLWebpackPlugin({
      favicon:  path.resolve("static/favicon.png"),
      template: path.resolve("src/index.html"),
    }),
  ],

  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader:  "babel",
        query:   { presets: ["es2015", "stage-0"] }
      },
      {
        test:    /\.tsx?$/,
        exclude: /node_modules/,
        loader:  "ts-loader"
      },
    ],
  },

  postcss: () => {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-nested")(),
      require("postcss-reporter")(),
      require("postcss-browser-reporter")(),
    ];
  }
};

module.exports = config;
