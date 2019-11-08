var express = require('express');
var app = express();
var path = require('path');
var webpackNumbers = require('./dist/webpack-numbers');

app.use(express.static('dist'));

console.log('Number:', webpackNumbers.numToWord(2));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);