// add(1)(2)(3)

function add(...params) {
  const result = [...params]
  add = function (...args) {
    result.push(...args)
    return add
  }
  add.toString = function () {
    return result.reduce((a, b) => a + b)
  }
  return add
}

console.log(`${add(1)(2)(3)}`)
