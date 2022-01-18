const fs = require('fs')
const path = require('path')

Promise.resolve().then(() => {
  console.log('promise00')
})

setTimeout(() => {
  console.log('执行异步方法timeOut')
})

process.nextTick(() => {
  console.log('nextTick1')
})

fs.readFile(path.resolve(__dirname, '../koa2洋葱模型/index.js'), {encoding: 'utf-8'}, function() {
  console.log('读文件')

  Promise.resolve().then(() => {
    console.log('promise 执行测试')
  })

  process.nextTick(() => {
    console.log('nextTick 执行测试')
  })

  setImmediate(() => {
    setTimeout(() => {
      console.log('执行异步方法timeOut1')
    })
    console.log('setImmediate1')
  })
  process.nextTick(() => {
    console.log('nextTick 随机')
  })
  setImmediate(() => {
    console.log('setImmediate2')
  })
  Promise.resolve().then(() => {
    console.log('Promise 随机')
  })
})

process.nextTick(() => {
  console.log('nextTick2')
})

setImmediate(() => {
  console.log('setImmediate')
})

process.nextTick(() => {
  console.log('nextTick3')
})

Promise.resolve().then(() => {
  console.log('promise')
})