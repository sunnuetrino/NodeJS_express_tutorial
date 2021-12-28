const { createReadStream } = require('fs')

// Buffer size controlled with HighWaterMark

const stream = createReadStream('../node-folder-content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(`error is ${err}`)
})