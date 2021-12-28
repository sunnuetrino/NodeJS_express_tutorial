const http = require('http');
const { readFileSync } = require('fs');

// get all files 
// Synchrnous read. Only read once. Not ever request
const homepage = readFileSync('./navbar-app/index.html')
const stylecss = readFileSync('./navbar-app/styles.css')
const logocvg = readFileSync('./navbar-app/logo.svg')
const browserapp = readFileSync('./navbar-app/browser-app.js')



// each request to the server. this executes
const server = http.createServer((req, res) => {


    //console.log('user hit the server')
    //console.log(req.method)
    const url = req.url
    console.log(url)

    if (url === '/') {

        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homepage)
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page</h1>')
        res.end()

    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(logocvg)
        res.end()

    }

    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(stylecss)
        res.end()

    }

    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(browserapp)
        res.end()

    }

    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page not found.</h1>')
        res.end()

    }
    // content type also known as content type


})

server.listen(443)