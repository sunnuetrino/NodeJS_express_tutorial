const path = require('path');
const { fileURLToPath } = require('url');

console.log(path.sep)
filepath = path.join('./node-folder-content', 'subfolder', 'test.txt')
console.log(filepath)


const base = path.basename(filepath)

console.log(base)

const abs_path = path.resolve(__dirname, 'node-folder-content', 'subfolder', 'test.txt')
console.log(abs_path)