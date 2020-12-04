const path = require('path')

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          'css-loader'
        ]
      }
    ],
  }
}