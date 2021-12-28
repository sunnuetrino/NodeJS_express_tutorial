

const { readFile } = require('fs');
const { writeFile } = require('fs');
const { reject } = require('lodash');

const writeText = (path, data) => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, (err, result) => {
            if (err) {
                reject(err)
            }

            resolve(result)
        })
    })
}

const getText = (path) => {
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


}
// three states of promise
// Pending, resolve, rejected
getText('./node-folder-content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

//console.log("done")

const start = async () => {
    try {
        const first = await getText('./node-folder-content/first.txt')
        console.log(first)
        const second = await getText('./node-folder-content/second.txt')
        console.log(second)
        const result = await writeText('./node-folder-content/result-sync.txt',
            `Here is the result ${first}, ${second}`)
        console.log(`result is ${result}`)

    }
    catch (error) {
        console.log(`Error is ${error}`)
    }


}

start()

console.log("done")