var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Exam Docker \n');
  }).listen(8070, '172.17.0.2');
  console.log('Exam Docker');
