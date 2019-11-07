const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    execute (cb) {
        console.log('before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    };
};

const logger = new Logger();

logger.on('start', () => console.log('starting'));
logger.on('finish', () => console.log('finish'));
logger.on('finish', () => console.log('Done'));

logger.execute(() => console.log('Hello World'));