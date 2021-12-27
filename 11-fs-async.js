// sync or async

// fs module 

const { readFile, writeFile } = require('fs')


console.log('start')
readFile('./node-folder-content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./node-folder-content/second.txt', 'utf-8', (err, result) => {

        if (err) {
            console.log(err)
            return
        }
        const second = result

        writeFile('./node-folder-content/result-sync.txt',
            `Here is the result ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with the task')
            })
    })
})

console.log('starting next task')