const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/templates/dev.html',
  filename: './index.html',
})

module.exports = merge.smart(common, {
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [htmlPlugin],
  mode: 'development',
  optimization: {
    minimize: false,
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
})
