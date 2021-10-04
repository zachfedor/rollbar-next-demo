require('dotenv').config();

const webpack = require("webpack");
const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  webpack: (config, options) => {
    const buildId = JSON.stringify(options.buildId);

    config.plugins.push(new webpack.DefinePlugin({
      "process.env.NEXT_BUILD_ID": buildId,
    }));

    config.plugins.push(new RollbarSourceMapPlugin({
      accessToken: JSON.stringify(process.env.ROLLBAR_SERVER_TOKEN),
      version: buildId,
      publicPath: "http://localhost:3000/_next",
    }));

    return config;
  },
}
