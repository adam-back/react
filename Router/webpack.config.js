var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './index.js',

  output: {
    path: 'dist',
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};