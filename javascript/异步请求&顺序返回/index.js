const allRequest = (allPromise) => {
  const result = []
  let index = 0
  return new Promise((resolve) => {
    const callbackFn = (res, i) => {
      result[i] = res
      index++
      if (index === allPromise.length) resolve(result)
    }

    for (let i = 0; i < allPromise.length; i += 1) {
      const fn = allPromise[i]
      fn().then((res) => callbackFn(res, i))
    }
  })
}

const makePromise =
  (time = 0) =>
  () =>
    new Promise((resolve) => {
      let timer = setTimeout(() => {
        resolve(time)
        clearTimeout(timer)
      }, time)
    })

const promiseArr = [makePromise(1000), makePromise(), makePromise(2000), makePromise(500)]
allRequest(promiseArr).then(res => {
  console.log(res)
})
