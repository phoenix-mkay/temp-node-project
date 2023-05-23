const {readFileSync, writeFileSync}  = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/seconde.txt','utf-8')

// console.log(first,second);

writeFileSync('./content/third-sync.txt',  `Here is the result : ${first}, ${second}`,{flag: 'a'})
