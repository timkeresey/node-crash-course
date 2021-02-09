const Person = require('./person');
const Logger = require('./logger');

const person1 = new Person("Jim Jimson", 35);
const logger = new Logger();

person1.greeting();

logger.on('message', (data) => console.log('called listener', data));
logger.log('hello world');
logger.log('goodbye world');
