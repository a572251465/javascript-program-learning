const A = 1 << 1
const B = 1 << 2
const C = 1 << 3

const limit = A | B | C

console.log(limit & A)
console.log(limit & B)
console.log((limit & C) === C)

let info = 0b1010011 // 想将内容修改为 0b01010001
const result = info ^ 0b0000010
console.log(result)


const arr1 = [1, 1, 2, 2, 2, 2, 4, 4, 3]
let res

arr1.forEach(item => {
  res ^= item
})
console.log(res)
