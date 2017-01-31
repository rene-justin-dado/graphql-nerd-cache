require('whatwg-fetch')

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  output: {
    path: `${__dirname}/src/public`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
