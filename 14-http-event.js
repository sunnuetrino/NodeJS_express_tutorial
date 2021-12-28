const http = require('http')

const server = http.createServer()

// Server object lientes to the request event
// http server extends EventEmitter
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)