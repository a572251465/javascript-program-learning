const str = '123456789'
const str1 = '1123456789'
const str2 = '21123456789'

// 方法1
function transform(str = '') {
  const max = str.length
  let result = ''
  let count = 0
  let index = max - 1

  while (index >= 0) {
    result = str[index] + result
    count++

    if (count % 3 === 0 && index > 0) result = `,${result}`
    index--
  }

  return result
}

// console.log(transform(str))
// console.log(transform(str1))
// console.log(transform(str2))

// console.log((+str).toLocaleString())

console.log(str.replace(/(?!^)(?=(\d{3})+$)/gi, ","))
console.log(str1.replace(/(?!^)(?=(\d{3})+$)/gi, ","))