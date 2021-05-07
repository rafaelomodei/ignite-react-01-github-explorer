const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve:{
    extensions: ['.js', '.jsx'],
  },
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