// This script creates a simple server in node using http module
const app = require('http');

app.createServer((request, response) => {
  // if the response status code is 200
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;
