const arr = [11, 2, 45, 32, 11, 67, 76]

const values = []
while (arr.length > 0) {
  const item = Math.min(...arr)
  const index = arr.findIndex((cur) => cur === item)
  values.push(item)
  arr.splice(index, 1)
}
console.log(values)