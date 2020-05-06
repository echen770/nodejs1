const EventEmitter = require('events');
const Logger = require('./logger');

const logger = new Logger();

//register a listener
logger.on('messageLogged', function (eventArg) {
    // console.log('Listener called')
    console.log(eventArg);
});

logger.log('some message');