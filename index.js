var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('hello world')
  console.log("working");
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
