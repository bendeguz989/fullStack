const http = require('http');
const fs = require('fs');
const { features } = require('process');
const port = 5555;

const server = http.createServer((req, res) => {
    console.log("Újkérés érkezett:");
    console.log(req.url);
    console.log(req.mehod);


    //router
    switch (true) {
        case req.method === '/' && req.method === 'GET':
            fs.readFile("./views/index.html", ( err, file) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(file);
            })
        break;

        case req.method === '/script.js' && req.method === 'GET':
            fs.readFile("./public/script.js", ( err, script) => {
                res.setHeader('Content-Type', 'text/javascript');
                res.writeHead(200);
                res.end(script );
            })
        break;

        default:
            fs.readFile("./views/error.html", ( err, file) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(404);
                res.end(file);
            })
    }
})

server.listen(port);