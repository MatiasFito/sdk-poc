  const path = require('path');

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
