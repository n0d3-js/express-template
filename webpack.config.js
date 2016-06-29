module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index',
  ],
  output: {
    path: './static/code',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
