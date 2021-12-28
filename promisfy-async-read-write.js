

const { readFile } = require('fs').promises;
const { writeFile } = require('fs').promises;
const util = require('util')

/* using promisify intead of defining promises */
/* const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile) */


/* const writeText = (path, data) => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, (err, result) => {
            if (err) {
                reject(err)
            }

            resolve(result)
        })
    })
} */

/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {

            if (err) {
                //console.log("error")
                //console.log(err)
                reject(err)
            }
            else {
                resolve(data)
            }

        })
    })


} */
// three states of promise
// Pending, resolve, rejected
readFile('./node-folder-content/first.txt', 'utf8')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

//console.log("done")

const start = async () => {
    try {
        const first = await readFile('./node-folder-content/first.txt', 'utf8')
        console.log(first)
        const second = await readFile('./node-folder-content/second.txt', 'utf8')
        console.log(second)
        const result = await writeFile('./node-folder-content/result-sync.txt',
            `Here is the result ${first}, ${second}`)
        console.log(`result is ${result}`)

    }
    catch (error) {
        console.log(`Error is ${error}`)
    }


}

start()

console.log("done")