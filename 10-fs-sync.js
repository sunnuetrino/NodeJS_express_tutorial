// sync or async

// fs module 

const { readFileSync, writeFileSync } = require('fs')
const fs = require('fs')
const { fileURLToPath } = require('url')

console.log('start')
const first = readFileSync('./node-folder-content/first.txt', 'utf-8')
const second = readFileSync('./node-folder-content/second.txt', 'utf-8')


writeFileSync('./node-folder-content/result-sync.txt',
    `Here is the result ${first}, ${second}`,
    { flag: 'a' })

console.log('Done with this task')
console.log('Starting the next one')