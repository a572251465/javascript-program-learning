const obj = {
  1: 2,
  2: 3,
  length: 0
}

obj.__proto__ = Array.prototype

// 当执行push的同时 获取到length的值 直接执行<obj[length] = value>, 然后length + 1
obj.push(44)
console.log(obj)


console.log(Array.prototype.slice.call(obj))
console.log(Array.prototype.splice.call(obj, 0))
console.log(Array.from(obj))
