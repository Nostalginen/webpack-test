const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge.smart(common, {
  mode: 'development',
  optimization: {
    minimize: false
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  }
})
