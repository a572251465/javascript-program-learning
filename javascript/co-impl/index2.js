const makePromise = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

const iterator = function* iterator() {
  let temp = yield makePromise(1000)
  temp = yield 2
  temp = yield makePromise(2000)

  return temp
}

function co(iterator) {
  return new Promise((resolve) => {
    const it = iterator()

    function next(val) {
      const { value, done } = it.next(val)
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
