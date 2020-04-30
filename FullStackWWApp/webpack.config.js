const path = require('path');
const ENTRY = path.join(__dirname, 'client', 'app','index.jsx')
const OUTPUT = path.join(__dirname, 'client', 'public')
module.exports = {
  entry: ENTRY,
  //define loaders that tell babel how to process files
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: OUTPUT,
  },

}