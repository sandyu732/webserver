'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    console.log(req.url);
    console.log(req.headers)
});

server.listen(port, hostname, () => {
    console.log(`Server running at a http://${hostname}:${port}/`);
});
