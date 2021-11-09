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

// co库 传递一个生成器函数进去其中
const co = function co(iterator) {
  // 执行生成器函数  得到一个生成器对象
  const it = iterator()
  // 返回一个promise
  return new Promise(resolve => {
    const next = function (val) {
      // 执行生成器函数
      const {value, done} = it.next(val)
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
