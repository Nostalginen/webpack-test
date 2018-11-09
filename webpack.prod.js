const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const pxtorem = require('postcss-pxtorem')
const minifyPlugin = new MinifyPlugin({}, { comments: false })

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    minimizer: [minifyPlugin]
  },
  devtool: '',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: [pxtorem, autoprefixer, cssnano] }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/styles/variables.scss',
                './src/assets/styles/breakpoints.scss'
              ]
            }
          }
        ]
      }
    ]
  }
})
