

const os = require('os')

const user = os.userInfo()

const uptime = os.uptime()

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(user)
console.log(`The system uptime is ${uptime} seconds `)
console.log(currentOS)

