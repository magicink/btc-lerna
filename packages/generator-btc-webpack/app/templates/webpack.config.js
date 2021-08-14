const path = require('path')
module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'src/index')]
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    library: {
      type: 'commonjs'
    },
    path: path.resolve(__dirname, 'dist')
  }
}
