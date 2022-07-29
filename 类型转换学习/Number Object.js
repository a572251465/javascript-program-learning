const obj = {}
const obj1 = {
  valueOf: function () {
    return "1"
  }
}
const obj2 = {
  toString: function () {
    return "22"
  }
}

const obj3 = {
  valueOf: function () {
    return "33"
  },
  toString: function () {
    return "44"
  }
}

console.log(Number(obj)) // NaN
console.log(Number(obj1)) // 1 直接调用valueOf函数
console.log(Number(obj2)) // 22 调用valueOf函数时没有找到，调用toString方法
console.log(Number(obj3)) // 33 优先调用valueOf函数


