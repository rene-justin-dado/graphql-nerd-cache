const webpack = require('webpack')
module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:1234',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: 'bundle.js',
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map'
}
