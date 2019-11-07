var express = require('express');
var app = express();
var path = require('path');
var _ = require('lodash');
var webpackNumbers = require('./dist/webpack-numbers');

app.use(express.static('dist'));

// Don't know why it gets nested. Still it fails with lodash being undefined
console.log('Number:', webpackNumbers.webpackNumbers.numToWord(2));

app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);