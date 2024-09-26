const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main/main.ts',
  target: 'electron-main',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './NativeBackend.dll', to: 'NativeBackend.dll' },
        { from: './native-addon/build/Release/native_backend.node', to: 'native_backend.node' },
        { from: 'assets', to: 'assets' },
      ],
    }),
  ],
};
