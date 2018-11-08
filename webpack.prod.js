const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const Dotenv = require('dotenv-webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const pxtorem = require('postcss-pxtorem')

const dotenvPlugin = new Dotenv()
const cleanPlugin = new CleanWebpackPlugin(['dist'])
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})
const minifyPlugin = new MinifyPlugin({}, { comments: false })

module.exports = merge(common, {
  mode: 'production',
  devtool: '',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
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
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            outputPath: 'assets/'
          }
        }
      }
    ]
  },
  plugins: [dotenvPlugin, cleanPlugin, htmlPlugin, minifyPlugin]
})
