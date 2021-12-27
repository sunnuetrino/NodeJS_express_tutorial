// local depedency 
// npm i package_name

// global depedency -- use it any project
// npm install -g package_name
//sudo npm install -g <package_name>

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)