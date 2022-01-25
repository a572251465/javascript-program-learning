const makePromise = (time) => {
  return new Promise((resolve) => {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      resolve()
    }, time)
  })
}

;(async function () {
  await makePromise(1000)
  console.log(1000)
  await makePromise(2000)
  console.log(2000)
  await makePromise(3000)
  console.log(3000)
})()
