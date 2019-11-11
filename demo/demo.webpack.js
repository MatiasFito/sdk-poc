  const path = require('path');
  const HtmlWebPackPlugin = require("html-webpack-plugin");

  const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'web/src/index.js'),
    output: {
      path: path.resolve(__dirname, 'node/reactApp')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, "web/src")
          ],
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          include: [
            path.resolve(__dirname, "web/src")
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
        template: path.resolve(__dirname, "web/src/index.html"),
        filename: "./index.html"
      })
    ]
  };

  module.exports = config;
