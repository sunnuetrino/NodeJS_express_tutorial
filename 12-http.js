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
