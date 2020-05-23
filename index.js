const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1><p>querry object : '+querryObject+'</p>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
