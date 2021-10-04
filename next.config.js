require('dotenv').config();

const webpack = require("webpack");
const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin');

console.log('=== next config tokens ===');
console.log('server', process.env.ROLLBAR_SERVER_TOKEN);
console.log('client', process.env.ROLLBAR_CLIENT_TOKEN);
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  webpack: (config, options) => {
    const buildId = JSON.stringify(options.buildId);

    config.plugins.push(new webpack.DefinePlugin({
      "process.env.NEXT_BUILD_ID": buildId,
    }));

    config.plugins.push(new RollbarSourceMapPlugin({
      accessToken: process.env.ROLLBAR_SERVER_TOKEN,
      version: buildId,
      publicPath: "https://rollbar-next-demo.vercel.app/_next/",
    }));

    return config;
  },
}
