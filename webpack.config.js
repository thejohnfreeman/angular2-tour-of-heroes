var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    // Search for static files under this path.
    contentBase: path.resolve(__dirname, 'src')
  }
}
