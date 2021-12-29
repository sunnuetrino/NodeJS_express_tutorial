const express = require('express')
const peopleRouter = require('./routes/people')
const loginRouter = require('./routes/auth')



const app = express()

// static assets

app.use(express.static('./methods-public'))

// parse form data 
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/api/people', peopleRouter)

app.use('/api/login', loginRouter)





app.listen(5000, (req, res) => {
    console.log('server is listening on port 5000...')
})