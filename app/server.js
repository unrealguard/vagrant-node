var http = require('http');

var ip = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8888;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World with forever 2\n');
}).listen(port, ip);

console.log('Server running at %s:%d', ip, port);