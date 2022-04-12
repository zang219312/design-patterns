// stream
const fs = require('fs')
const readStream = fs.createReadStream('./data/file1.txt')

const readline = require('readline')
const rl = readline.createInterface({
  input: readStream
})
let length = 0
readStream.on('data', function (chunk) {
  const len = chunk.toString().length
  length += len
})

readStream.on('end', function () {
  console.log('长度：', length)
})
let lineNum = 0
rl.on('line', function () {
  lineNum += 1
})

rl.on('close', function () {
  console.log('lineNum： ', lineNum)
})
