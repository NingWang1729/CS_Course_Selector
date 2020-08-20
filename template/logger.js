/*
function log(message) {
    const EventEmitter = require('events');
    const emitter = new EventEmitter();

    emitter.on('logger', (arg) => {
	console.log('logger', arg);
    });

    emitter.emit('logger', {data: message});
}
*/

/*
function log(message) {
    //Raise an event
    console.log(message);
    emitter.emit('messageLogged', { id: 1, url: 'http://' });
}
*/

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
	console.log(message);
	this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;
