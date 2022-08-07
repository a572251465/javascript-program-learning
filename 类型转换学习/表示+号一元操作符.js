const obj = {
  valueOf() {
    return '2222'
  }
}

console.log(+2) // 2
console.log(+false) // 0
console.log(+true) // 1
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+'2') // 2
console.log(+'2.2') // 2.2
console.log(+{}) // NaN
console.log(+[]) // 0
console.log(+['1']) // 1
console.log(+[1, 2, 3]) // NaN
console.log(+function () {}) // NaN
console.log(+obj) // 2222
