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

const promises = [1, 2, 3].map((time) => makePromise(time * 1000, time))

promises.reduce((pre, cur) => {
  return pre.then(() => {
    return new Promise((resolve) => {
      cur().then(() => {
        resolve()
      })
    })
  })
}, Promise.resolve())
