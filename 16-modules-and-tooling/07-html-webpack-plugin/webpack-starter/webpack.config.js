const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,                       // regular expression: '.css$' means it should end with .css
                                              // This means any file that ends with a .css uses the loader
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};