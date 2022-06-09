const path = require('path');

module.exports = {
  mode: 'production',
  
  entry: './src/client/index.ts',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'client_packages'),
  },
};