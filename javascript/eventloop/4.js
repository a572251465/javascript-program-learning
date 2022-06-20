const Promise = require('./P')
// [0, 1, micro, 2, micro1, 3]
// 0 1 2
Promise.resolve().then(() => {
  console.log(0);
  return new Promise(resolve => {
    resolve('test')
  })
}).then((res) => {
  console.log(res)
})
Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(4);
}).then(() => {
  console.log(5);
})

// [0, 1, micro, 2, micro1, 3]
// 0 1 2
