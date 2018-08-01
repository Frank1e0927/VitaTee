const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(["dist"], {
        root: process.cwd(),
        verbose: true,
        dry: false
      }),
  ]
})

// skr