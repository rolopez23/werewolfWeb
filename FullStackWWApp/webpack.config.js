module.exports = {
  //declare entry point file for compiliation
  //needs to match exactly location of the index.jsx file
  //Docs: https://webpack.js.org/concepts/#entry
  entry: __dirname + '/client/app/index.jsx',
  //define loaders that tell babel how to process files
  module: {

  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public',
  },

}