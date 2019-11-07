const http = require ('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/bday'){
        let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let date = [];
        req.on('data', chuck => { 
            date.push(chuck);
        })
        .on('end', () => {
            res.writeHead(200,{'Content-Type': 'text/plain'});
            date = Buffer.concat(date).toString();
            let birthDate = new Date(date);
            res.end(weekdays[birthDate.getDay()]);
        })
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8002);
console.log('Servidor en la URL http://localhost:8002');