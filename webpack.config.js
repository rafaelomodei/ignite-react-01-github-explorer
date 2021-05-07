const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
const loader = require('sass-loader');

const isDevelopment = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve:{
    extensions: ['.js', '.jsx'],
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPligin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module:{
    rules:[
      {
        test: /\.jsx$/,
        exclude: /node_modules/, //não converte os dados da pasta node modules... é responsabilidade da biblioteca
        use: 'babel-loader', //responsavel por converter o arqui que está vindo do "test"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, //não converte os dados da pasta node modules... é responsabilidade da biblioteca
        use: ['style-loader', 'css-loader', 'sass-loader'], //responsavel por converter o arqui que está vindo do "test"
      }
    ]
  }
};