// Middleware function
const logger = (req, res, next) => {

    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // You can send your own response here
    // or Pass it on to the next middleware
    next()
}

module.exports = logger