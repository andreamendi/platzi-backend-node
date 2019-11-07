const fs = require('fs');
const port = 8080;
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.readFile('./big', (err, data) => {
        if (err) {
            console.log('error', err);
        }
        res.end(data);
    });
});

console.log(`servidor en la url http://localhost:${port}`);
server.listen(port);