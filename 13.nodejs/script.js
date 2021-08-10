// console.log("Hello World");
//we want to use hhtp module
const http = require('http');

//then created hostname and post
const hostname = '127.0.0.1';
const port = 3000;

//using module served hello world
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});