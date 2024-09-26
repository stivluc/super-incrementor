const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mainConfig = {
  entry: './src/main.ts',
  target: 'electron-main',
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  resolve: { extensions: ['.ts', '.js'] },
  output: { path: path.resolve(__dirname, 'dist'), filename: 'main.js' },
};

const rendererConfig = {
  entry: './src/renderer.tsx',
  target: 'electron-renderer',
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: { path: path.resolve(__dirname, 'dist'), filename: 'renderer.js' },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'NativeBackend.dll', to: '.' },
        { from: 'build/Release/nativebackend.node', to: '.' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = [mainConfig, rendererConfig];
