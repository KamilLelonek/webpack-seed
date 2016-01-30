const webpack          = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackDevConfig = webpack(require("../webpack/webpack.dev.config"));

const port             = 8080;
const host             = "localhost";
const message          = `Webpack Dev Server started at ${port}`;
const webpackOptions   = { hot: false, historyApiFallback: true, stats: { colors: true } };
const webpackDevServer = new WebpackDevServer(webpackDevConfig, webpackOptions);
const errorFunction    = err => {
  if(err) throw err;
  console.log(message);
};

webpackDevServer.listen(port, host, errorFunction);
