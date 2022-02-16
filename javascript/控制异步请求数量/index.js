const makePromise = (time) => {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(time)
      }, time)
    })
}

const fns = [1000, 1500, 500, 2000].map((item) => makePromise(item))

function currentLimiting(fns = [], num) {
  const result = []
  const len = fns.length

  return new Promise((resolve) => {
    const afterFns = fns.splice(0, num)
    let fn
    function callback() {
      while ((fn = afterFns.shift())) {
        fn().then((res) => {
          result.push(res)

          console.log(res)
          if (len === result.length) {
            resolve(result)
          } else {
            afterFns.push(fns.shift())
            callback()
          }
        })
      }
    }
    callback()
  })
}

currentLimiting(fns, 2).then((res) => {
  console.log(res)
})
