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

const allPromise = [1, 2, 3].map((item) => makePromise(item * 1000, item))

const promise = allPromise.reduce((pre, cur) => {
  return pre.then(() => {
    return new Promise((resolve) => {
      cur().then(() => {
        resolve()
      })
    })
  })
}, Promise.resolve())

promise.then(() => {
  console.log('执行结束...')
})
