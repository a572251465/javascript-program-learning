const Promise1 = require('./promise')
const p = [
  new Promise1((resolve, reject) => {
    reject(111)
  }),
  new Promise1((resolve, reject) => {
    setTimeout(() => {
      reject(222)
    }, 1000)
  })
]
Promise1.any(p).then((res) => {
  console.log(res)
})
// Promise.allSettled(p).then((res) => {
//   console.log(res)
// })
// Promise1.all(p).then((res) => {
//   console.log(res)
// })
// Promise1.race(p).then((res) => {
//   console.log(res)
// })

// ------------------ 上面是自己写的代码 ---------------------------
// const p1 = [
//   new Promise((resolve) => {
//     resolve(111)
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(222)
//     }, 1000)
//   }),
// ]
// Promise.any(p1).then((res) => {
//   console.log(p1)
// })
// Promise.all(p1).then((res) => {
//   console.log(res)
// })
//
// Promise.race(p1).then((res) => {
//   console.log(res)
// })
// Promise.allSettled(p1).then((res) => {
//   console.log(res)
// })
