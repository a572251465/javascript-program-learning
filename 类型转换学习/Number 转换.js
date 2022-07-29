const obj = {
  valueOf: function () {
    return 2
  }
}

const obj1 = {
  toString: function () {
    return 40
  }
}

// console.log(Number(false)) // 0
// console.log(Number(0)) // 0
// console.log(Number(NaN)) // NaN
// console.log(Number('')) // 0
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(true)) // 1
// console.log(Number(1)) // 1
// console.log(Number(() => {})) // NaN
// console.log(Number({})) // NaN
// console.log(Number([1, 2])) // 0
// console.log(Number(obj)) // 2
// console.log(Number(obj1)) // 40

const obj2 = {
  valueOf: function () {
    return 2
  },
  toString: function () {
    return '1'
  }
}

console.log(Number(obj2))
