let arr = [[1], [2, 3], [4, 5, 6, [7, 8, [9, 10, [11]]]], 12]

// 1. 通过toString()的方式
const a = arr
  .toString()
  .split(',')
  .map((item) => +item)
// console.log(a)

// 2. 使用JSON.stringify + 正则替换
const e = JSON.stringify(arr)
  .replace(/\[|\]/gi, '')
  .split(',')
  .map((item) => +item)
console.log(e)

// 3. 通过自带的函数来解决
const b = arr.flat(Infinity)
// console.log(b)

// 4. 使用循环 + 解构的方式
let c = arr
while (c.some((item) => Array.isArray(item))) {
  c = [].concat(...c)
}
// console.log(c)

// 5. 使用reduce + 递归函数解决方案
let d = arr
const decon = function decon(arr) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      pre = pre.concat(decon(cur))
    } else {
      pre = pre.concat(cur)
    }
    return pre
  }, [])
}
d = decon(d)
// console.log(d)
