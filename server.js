const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => { //request and response are special types of objects called strings - read as chunks and created at the same time when are created
    console.log(req.headers);
    res.statusCode = 200; // everything is okay message
    res.setHeader('Content-Type', 'text/html'); // what kind of data to expect, body as well string - html in the body
    res.end('<html><body><h1>Hello World!</h1></body></html>'); // short body = we can send it here with a little bit of html 
});

server.listen(port, hostname, () => { //port and hostname are variable and there is () object 3rd 
    console.log(`Server running at http://${hostname}:${port}/`);
});