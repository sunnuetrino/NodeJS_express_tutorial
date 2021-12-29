const express = require('express')
const authorize = require('./authorize')
const morgan = require('morgan')

const app = express()

// req => middleware => res

const logger = require('./logger')

// use vs route
//app.use([logger, authorize])
// Using Morgan for middleware functions ( third party)
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {

    res.send('about')
})

app.get('/api/products', (req, res) => {

    res.send('Products')
})

app.get('/api/items', (req, res) => {

    console.log(req.user)
    res.send('items')
})

app.listen(5000, (req, res) => {
    console.log('server is listening on port 5000...')
})