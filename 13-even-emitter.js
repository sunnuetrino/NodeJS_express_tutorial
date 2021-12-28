const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// On - listen to specific event
// emit - emit the event

// response is the name of the event 
// Order for listening 

customEmitter.on('response', (name, id) => {
    console.log(`data recieved from ${name} and id is ${id}`);
})

customEmitter.on('response', () => {
    console.log(`Logic 1`);
})

customEmitter.on('response', () => {
    console.log(`Logic 2`);
})

// resonse is emitted here
customEmitter.emit('response', 'john', 34)