const makePromise = (time) =>
  new Promise((resolve) => {
    let timer = setTimeout(() => {
      resolve(time)
      clearTimeout(timer)
    }, time)
  })

const iterator = function* () {
  let res = yield makePromise(1000)
  res = yield 2
  res = yield makePromise(2000)
  return res
}

function co(iterator) {
  const it = iterator()
  return new Promise((resolve) => {
    function next(val) {
      const { done, value } = it.next(val)
      if (done) {
        resolve(value)
      } else {
        next(value)
      }
    }
    next()
  })
}

co(iterator).then((res) => {
  console.log(res)
})
