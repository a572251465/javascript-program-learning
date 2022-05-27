console.log(Array.from('test')) // [ 't', 'e', 's', 't' ]

const test = [0, 1, { name: 'lihh' }]
const test1 = Array.from(test)

console.log(test === test1, test[2] === test1[2]) // false true

const m = new Map().set(1, 2).set(3, 4)
const s = new Set().add(1).add(2).add(3).add(4)
console.log(Array.from(m)) // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s)) // [ 1, 2, 3, 4 ]

// 转换特殊对象
const obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
}
console.log(Array.from(obj)) // [ 1, 2, 3, 4 ]

console.log(Array.from({length: 5}).fill(1))

const arr1 = [1, 2, 3]
console.log(arr1.valueOf())
console.log(arr1.toString())