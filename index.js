var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test/', function (req, res) {
  res.send('You have discovered my secret');
});

app.get('*', function (req, res) {
  res.send('You should not go there');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});