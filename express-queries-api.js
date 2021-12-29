const { application } = require('express')
const express = require('express')

const { products } = require('./data')

const app = express()

app.get('/', (req, res) => {
    //res.json([{ name: 'john' }, { name: 'susan' }])
    //res.json(products)
    res.send('<h1> Home page </h1> <a href="/api/products"> products</a>')
})

app.get('/api/products', (req, res) => {

    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }

    })

    res.json(newProducts)

})

app.get('/api/products/:id', (req, res) => {

    console.log(req.params)

    const singleProduct = products
        .find((product) => product.id == Number(req.params.id))

    if (!singleProduct) {
        return res.status(404).send('Product not found')
    }

    //const { id, name, image } = products[1]
    //const singleProduct = { id, name, image }
    console.log(singleProduct)

    res.json(singleProduct)

})

app.get('/api/products/:id/reviews/:reviewID', (req, res) => {

    res.send(`Review id ${req.params.id} 
    for product id ${req.params.reviewID}`)

})

app.get('/api/v1/query', (req, res) => {

    console.log(req.query);

    const { search, limit } = req.query

    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))

    }

    if (sortedProducts.length < 1) {
        //res.status(200).send("No Products found for the search criteria")
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)

})

app.listen(5000, () => {

    console.log('Server is listening on port 5000...')

})

