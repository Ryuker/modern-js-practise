// Uses CommonJS syntax
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../public'), 
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../public')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  }
}