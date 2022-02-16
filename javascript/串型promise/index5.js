const makePromise = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
      console.log(`第${time}张图片...`)
    }, time * 1000)
  })

;(async function () {
  await makePromise(1)
  await makePromise(2)
  await makePromise(3)
})()
