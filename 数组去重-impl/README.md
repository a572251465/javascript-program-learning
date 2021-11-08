## 多种方式实现了数组去重

1. 通过一些基本/ es6 的 api 来实现数组的去重处理

```javascript
const arr = [1, 1, 2, 3, 2, 5, 3, 6, 6]

// 1. 通过Set实现数组去重
console.log([...new Set(arr)])

// 2. 通过循环遍历 添加数据判断去重
function fn1() {
  const result = []
  arr.forEach((item) => {
    if (!result.includes(item)) result.push(item)
  })
  return result
}
// console.log(fn1())

// 3. 通过indexOf 以及lastIndexOf来实现
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
// console.log(fn2())

// 4. 通过filer来实现
function fn3() {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
console.log(fn3())
```
