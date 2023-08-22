// This script creates a simple server in node using http module
const http = require('http');

const HOST = 'localhost';
const PORT = 1245;

const app = http.createServer((request, response) => {
  // if the response status code is 200
  response.writeHead(200);
  // response.setheader("Content-Type", "text/plain")
  response.end('Hello Holberton School!');
});

app.listen(PORT, HOST);

module.exports = app;
