var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: path.join(__dirname, 'es6'), loader: 'babel-loader' }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};