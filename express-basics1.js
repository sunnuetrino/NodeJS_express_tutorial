const express = require('express');

const path = require('path')

const app = express();

// setup and static and middleware
// static assets are files the server does not have to change
// For index.html one can use it as a static asset or use Server side rendering
app.use(express.static('./public'))

/* app.get('/', (req, res) => {

    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))

}) */



app.all('*', (req, res) => {

    res.status(404).send('resource not found')

})

app.listen(5000, () => {
    console.log("server is listening on port 5000...")
})