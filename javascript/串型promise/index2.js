const makePromise = (time) => {
  return () =>
    new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve(time)
        clearTimeout(timer)
      }, time)
    })
}

const promiseArr = [1000, 2000, 3000].map((item) => makePromise(item))

function run() {
  promiseArr.reduce((pre, cur) => {
    return pre.then(() => {
      return new Promise((resolve) => {
        cur().then((res) => {
          resolve(res)
          console.log(res)
        })
      })
    })
  }, Promise.resolve())
}

run()
