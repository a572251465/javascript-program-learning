const str = '  111  '
const str1 = '  3   3  3  '
const str2 = '444  '

// 1. 通过parseInt()转换为数字
console.log(parseInt(str2))
// 2. 通过replace 来剔除空格
console.log(str.replace(/\s*/g, ''))
// 3. 通过正则表达式来剔除前后空格
console.log(str1.replace(/^\s*|\s*$/g, ''))
// 4. 通过寻找空格的位置 来截取字符串
const trimSpace = (str = '') => {
  let endIndex = str.length - 1
  let startIndex = 0
  const arr = Array.from(str)

  while (arr[startIndex] === ' ') ++startIndex
  while (arr[endIndex] === ' ') --endIndex

  return str.substring(startIndex, endIndex + 1)
}
console.log(trimSpace(str1))

// 5. 通过search进行查找位置
String.prototype.trim1 = function () {
  return this.substring(
    Math.max(this.search(/\S/), 0),
    this.search(/\S\s*$/) + 1
  )
}
console.log(str1.trim1())
