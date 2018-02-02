var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  entry: {
    app: './src/app.js',
    vendors: ['react']
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name]-[hash:6].js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: [{
          loader: 'json-loader'
        }]
      },
      {
        test: /.jsx?$/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env', 'stage-0']
          }
        }]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }],
          publicPath: './'
        })
      },
      {
        test: /\.(ttf|eot|png|jpg|jpeg|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:6].[ext]'
          }
        }]
      },
      {
        test: /\.properties$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  devtool: '#source-map'
};
