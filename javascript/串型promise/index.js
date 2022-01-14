// 1. 利用高阶函数来执行生成不同时期完成的promise
const makePromise = (time, num) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`第${num}张图片下载完成...`)
        resolve()
      }, time)
    })
  }
}

// 2. 返回一个数组函数，函数的返回值都是一个promise
const allPromise = [1, 2, 3].map((item) => makePromise(item * 1000, item))
// 3. 利用promise来将每个promise合并
const sum = allPromise.reduce((pre, cur) => {
  // 3.1 最外层的promise状态，将promise进行串链，这个promise完成取决于下个promise完成
  return pre.then(() => {
    // 3.2 返回一个新的promise表示状态
    return new Promise((resolve) => {
      // 3.3 最里面的promise控制什么时候执行完成，函数会返回一个promise
      cur().then(() => {
        resolve()
      })
    })
  })
}, Promise.resolve())
sum.then(() => {
  console.log('完成了...')
})
