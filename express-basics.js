const express = require('express');

const app = express()

// app.get
// app.post
// app.delete
// app.all
// app.use
// app.listen

// get on Home 
app.get('/', (req, res) => {
    console.log("user hit the resource")
    res.status(200).send('Home page')

})

app.get('/about', (req, res) => {
    console.log("user hit the about page")
    res.status(200).send('About page')

})

app.all('*', (req, res) => {

    res.status(404).send('<h1> resource not found </h1>')
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})

