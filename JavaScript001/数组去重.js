const arr = [1, 2, 1, 3, 4, 6, 8, 9, 8, 8, 0]

const arr1 = [...new Set(arr)]
console.log(arr1)

const arr2 = []
arr.forEach((item) => {
  if (arr2.includes(item)) return
  else arr2.push(item)
})
console.log(arr2)

function fn2() {
  const double = []
  const other = []
  arr.forEach((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      other.push(item)
    } else if (!double.includes(item)) {
      double.push(item)
    }
  })
  return double.concat(other)
}

console.log(fn2())

const arr3 = arr.filter((item, index) => arr.indexOf(item) === index)
console.log(arr3)