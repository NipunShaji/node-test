// const http = require('http');
var express = require('express');
var app = express();
const url = require('url');
const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
  var code = ''
  try {
    code = req.param('code');
  } catch (e) {
    code = 'no code'
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1><p>querry object : '+code+'</p>');
})

var server = app.listen(port,() => {
  console.log(`Server running at port `+port);
});
