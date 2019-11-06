  const path = require('path');

  const serverConfig = {
    target: 'node',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers-node.js',
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

  const webConfig = {
    target: 'web',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers-web.js',
      library: 'webpackNumbers',
      libraryTarget: 'var'
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

  module.exports = [ serverConfig, webConfig ];
