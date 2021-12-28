var http = require('http')
var fs = require('fs')


http.createServer(function (req, res) {
    /*     const text = fs.readFileSync('./node-folder-content/big.txt', 'utf8')
        res.end(text) */
    const filestream = fs.createReadStream('./node-folder-content/big.txt',
        'utf8')

    filestream.on('open', () => {
        filestream.pipe(res)

    })

    filestream.on('error', (err) => {

        res.end(err)

    })

}).listen(5000)