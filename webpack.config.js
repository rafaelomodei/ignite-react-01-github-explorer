const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve:{
    extensions: ['.js', '.jsx'],
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
      }
    ]
  }
};