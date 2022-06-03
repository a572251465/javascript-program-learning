const arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 6]

// console.log([...new Set(arr)])

// const hash = []
// const arr1 = arr.filter((item) => {
//   const existFlag = hash.includes(item)
//   if (!existFlag) hash.push(item)
//   return !existFlag
// })
// console.log(arr1)

// const arr1 = arr
//   .filter((item, index) => arr.indexOf(item) === index)
// console.log(arr1)
// 1 1 1 2 2 3 3 3 4 4 5 6

const sortArr = arr.sort((a, b) => a - b)
const result = []
for (let i = 0; i < sortArr.length - 1; i += 1) {
  if (sortArr[i] !== sortArr[i + 1]) {
    result.push(sortArr[i])
  }
}
console.log(result)