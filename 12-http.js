const http = require('http');

// Request and the response object
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        return res.end('Here is the about page')
    }

    return res.end(`<h1>Oops!</h1>
        <p>cannot find the page</p > 
        <a href="/">back home </a>'`)


})

server.listen(5000)

/* // local depedency
console.log('first')

setTimeout(() => {
    console.log('second')
}, 1000)

console.log('third')

setInterval(() => {
    console.log('hello world')
}, 2000)

console.log('I will run first')

 */

/* const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('hello world')

})

server.listen(5000, () => {
    console.log('server listening on port 5000')
}) */