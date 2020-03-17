const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {    
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,    
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      hash: false,
      template: './index_template.html',
      filename: './index.html'
    }),
  ], 

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),    
    publicPath: '/triplog/',
  }
};