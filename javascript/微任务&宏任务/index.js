console.log(1)
setTimeout(() => {
  console.log(2)
  Promise.resolve().then(() => {
    console.log(3)
  })
  console.log(8)
  setTimeout(() => {
    console.log(10)
  }, 0)
}, 15)

for (let i = 0; i < 1; i++) {}
new Promise((resolve) => {
  resolve(5)
}).then((data) => {
  console.log(data)
})

setTimeout(() => {
  console.log(6)
  Promise.resolve().then(() => {
    console.log(9)
  })
}, 10)
console.log(7)

