  const path = require('path');
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

  const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'demo/library'),
      filename: 'webpack-numbers.js',
      globalObject: 'typeof self !== \'undefined\' ? self : this',
      library: 'webpackNumbers',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, "src")
          ],
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: true
            }
          }
        })
      ]
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

  module.exports = config;
