// const http = require('http');
var express = require('express');
var app = express();
const url = require('url');
const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
  var code = ''
  var type = ''
  try {
    code = req.param('code');
  } catch (e) {
    code = 'no code'
  }
  try {
    type = req.param('type');
  } catch (e) {
    type = 'no type'
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1><p>querry object : '+code+'</p><p>type : '+type+'</p>');
})

var server = app.listen(port,() => {
  console.log(`Server running at port `+port);
});
