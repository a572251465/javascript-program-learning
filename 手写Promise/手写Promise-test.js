const Promise = require('./Promise')

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('111')
  }, 100)
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('333')
  }, 100)
})

const p3 = Promise.resolve('555')

const p4 = Promise.reject('error')

// Promise.all([p1, '222', p2, '444', p3]).then((res) => {
//   console.log(res)
// })

Promise.any([p1, '222', p2, '444', p3, p4]).then((res) => {
  console.log(res)
})
  .catch((error) => {
    console.log(error)
  })

Promise.any([p1, '222', p2, '444', p3, p4])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })


// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('111')
//   }, 100)
// })
//
// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('333')
//   }, 100)
// })
//
// const p3 = Promise.resolve('555')
//
// const p4 = Promise.reject('error')
//
// // Promise.all([p1, '222', p2, '444', p3]).then((res) => {
// //   console.log(res)
// // })
//
// Promise.allSettled([p1, '222', p2, '444', p3, p4])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// Promise.reject(111)
//   .then((res) => {
//     console.log(res, 'res')
//   })
//   .catch((error) => {
//     console.log(error, 'error')
//   })
//
// Promise.reject(new Promise((resolve, reject) => {
//   resolve("11111")
// }))
//   .then((res) => {
//     console.log(res, 'res')
//   })
//   .catch((error) => {
//     console.log(error, 'error')
//   })

// Promise.resolve(
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('test')
//     }, 1000)
//   })
// ).then((res) => {
//   console.log(res)
// })

// Promise.resolve(1111).then((res) => {
//   console.log(res)
// })
//
// Promise.resolve(
//   new Promise((resolve, reject) => {
//     resolve('12345')
//   })
// ).then((res) => {
//   console.log(res)
// })

// Promise.resolve(
//   new Promise((_, reject) => {
//     reject('error')
//   })
// ).then(res => {
//
// }, err => {
//   console.log(err)
// }).catch((err) => {
//   console.log(err, 'err')
// })

// const p = new Promise((resolve, reject) => {
//   // reject('111')
//   resolve("111-11")
// })
//
// p.finally(() => {
//   throw 'error'
// })
//   .then(
//     (res) => {
//       console.log(res, 'success')
//     },
//     (err) => {
//       console.log(err, 'err')
//     }
//   )
//   .catch((err) => {
//     console.log(err)
//   })

// p.then((res) => {
//   console.log(res)
//   return 'test' + 1
// })
//   .then((res) => {
//     console.log(res, '-1---------------------')
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('timeTout')
//       }, 500)
//     })
//   })
//   .then((res) => {
//     console.log(res, '-----------------')
//   })
