const http = require('http');
const fs = require('fs');

var handleRequest = (request, response) => {
    response.writeHead(200, {
	'Content-Type': 'text/html'
    });

    fs.readFile('./index.html', null, (error, data) => {
	if (error) {
	    response.writeHead(404);
	    response.write('Error 404: File not found!');
	} else {
	    response.write(data);
	}
	response.end();
    });
}

const server = http.createServer(handleRequest).listen(8000);


server.on('connection', (socket) => {
    console.log('New Connection...');
});

console.log('Listening on port 8000');
