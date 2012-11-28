var http = require('http');

var ip = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 8888;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, ip);
console.log('Server running at %s:%d', ip, port);