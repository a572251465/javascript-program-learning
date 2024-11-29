const obj = {
  valueOf() {
    return '10'
  },
  toString() {
    return '11'
  }
}

const obj1 = {
  toString() {
    return '12'
  }
}

console.log(+obj) // 10
console.log(+obj1) // 12


console.log([] + {});
