const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const dotenvPlugin = new Dotenv()
const cleanPlugin = new CleanWebpackPlugin(['dist'])
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  plugins: [dotenvPlugin, cleanPlugin, htmlPlugin],
  optimization: {
    noEmitOnErrors: false
  },
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
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
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
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
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
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
  }
}
