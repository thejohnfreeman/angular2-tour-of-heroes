var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /index.html/,
        loader: 'file-loader',
        options: {
          emitFile: false
        }
      },
      {
        test: /\.(html|css)$/,
        use: 'raw-loader'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: [
      // For index.html.
      path.resolve(__dirname, 'src'),
      // For node_modules.
      __dirname
    ],
    historyApiFallback: true
  },
  plugins: [
    // Eliminate "dependency is an expression" warnings.
    // https://github.com/angular/angular/issues/11580#issuecomment-275654083
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve('does-not-exist')
    )
  ]
}
