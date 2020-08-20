//const logger = require('./logger.js');

//console.log(logger);

//logger.log('Hello World');


//const path = require('path');

//var pathObj = path.parse(__filename);

//console.log(pathObj);


//const os = require('os');

//var totalMemory = os.totalmem();

//var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);
//console.log('Free Memory: ' + freeMemory);

//console.log('Total Memory: ${totalMemory}');
//console.log('Free Memory: ${freeMemory}');


//const fs = require('fs');

//const files = fs.readdirSync('./');

//console.log(files);

/*
fs.readdir('$', function(err, files) {
    if (err) {
	console.log('Error', err);
    } else {
	console.log('Result', files);
    }
});
*/

/*
//Register a listener
emitter.on('messageLogged', function(arg) { //e, eventArg
    console.log('listener called', arg);
});

//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });
*/


/*
const EventEmitter = require('events');

const Logger = require('./logger.js');
const logger = new Logger();


logger.on('messageLogged', (arg) => { //e, eventArg
    console.log('listener called', arg);
});*/

const http = require('http');
const fs = require('fs');
f
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

