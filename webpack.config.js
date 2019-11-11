  const path = require('path');
  const HtmlWebPackPlugin = require("html-webpack-plugin");

  const reactConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, 'webapp/index.js'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, "webapp")
          ],
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          include: [
            path.resolve(__dirname, "webapp")
          ],
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./webapp/index.html",
        filename: "./index.html"
      })
    ]
  }

  const libraryConfig = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
      globalObject: 'typeof self !== \'undefined\' ? self : this',
      library: 'webpackNumbers',
      libraryTarget: 'umd'
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      }
    }
  };

  module.exports = [libraryConfig, reactConfig];
