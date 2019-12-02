var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Ansible Exam \n');
  }).listen(8080, '192.168.56.218');
  console.log('Ansible Exam');
