const express = require('express')

const app = express()

// req => middleware => res

const logger = require('./logger')

app.use(logger)

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {

    res.send('about')
})

app.get('/api/products', (req, res) => {

    res.send('Products')
})

app.get('/about/items', (req, res) => {

    res.send('items')
})

app.listen(5000, (req, res) => {
    console.log('server is listening on port 5000...')
})