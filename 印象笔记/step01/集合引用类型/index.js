const test = function () {}
const arr = new Array(1, 2, 3)
const namekey = Symbol('name')
const obj = { name: '1' }

const person = {
  name: '张三',
  age: 18,
  5: true,
  [test]: test,
  [arr]: arr,
  [namekey]: '张三',
  [obj]: '111'
}

const keys = Object.getOwnPropertySymbols(person)
keys.forEach((value) => {
  console.log(typeof value)
})
console.log(person)
