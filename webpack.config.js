const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new UglifyJsPlugin({sourceMap: true}),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "Tamagotchi",
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
<<<<<<< HEAD
=======
      // CSS loader
>>>>>>> b7ec79078891957bb746c47e525af60d9d32313a
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
<<<<<<< HEAD
      {
        test: /\.js$/,
        exclude: [ /node_modules/,
          /spec/ ],
          loader: "eslint-loader"
        }, {
          test: /\.(gif|png|jp(e*)g|svg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            }
          }]
=======
      // eslint loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      //babel
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
>>>>>>> b7ec79078891957bb746c47e525af60d9d32313a
        }
      },
    ]
  }
};
