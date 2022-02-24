'use strict';

// const express = require('express');
const http = require('http')
const fs = require('fs')


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
// const app = express();
// app.get('/', (req, res) => {
//  res.send('Hello World');
// });
const server = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'text/html' })
	fs.createReadStream('index.html').pipe(res)
})

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
