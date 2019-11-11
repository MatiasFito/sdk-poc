var express = require('express');
var path = require('path');
var app = express();
var webpackNumbers = require('../library/webpack-numbers');

app.use(express.static(path.join(__dirname, 'reactApp')));

console.log('Using the library on the server to get text for number 2:', webpackNumbers.numToWord(2));

app.get('/', function(req, res) {
  res.sendFile('reactApp/index.html', { root: __dirname });
});

app.listen(3000);