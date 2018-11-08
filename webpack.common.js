const path = require('path')

module.exports = {
  optimization: {
    noEmitOnErrors: false
  },
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  }
}
