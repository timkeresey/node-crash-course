const EventEmitter = require('events');

// Create emitter class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('event fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
